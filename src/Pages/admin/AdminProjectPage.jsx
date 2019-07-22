import React from 'react';
import arrayMove from 'array-move';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import {getApiPostWithPayloadUrl, getApiUrl, getApiUrlWithParam} from "../../AppUtil";
import './AdminProject.scss'
import {Button, Form} from 'react-bootstrap';
import Header from '../../components/header/Header';
import Dropzone from 'react-dropzone'
import axios from 'axios';
import SortableImageList from "../../components/image/SortableImageList";
import FramedImage from "../../components/image/FramedImage";
import Cookies from "js-cookie";

export const PROJECT_TYPE = {
    residential: 'residential',
    commercial: 'commercial',
    all: 'all'
};
const emptyProject = {
    projectId: 0,
    projectName: '',
    description: '',
    type: PROJECT_TYPE.residential,
    images: []
};

export class AdminProjectPageComponent extends React.Component{
    constructor(props) {
        super(props);

        const loginToken = Cookies.get('loginToken');
        if (!loginToken) {
            this.props.history.push(`/admin`);
        }

        this.state = {
            isEditing: false,
            error: '',
            currentProject: emptyProject,
            allProject: []
        };
        axios.defaults.withCredentials = true;

        this.onAddProjectClick = this.onAddProjectClick.bind(this);
        this.onNewProjectSaveClick = this.onNewProjectSaveClick.bind(this);
        this.handleChangeProjectName = this.handleChangeProjectName.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleTypeChangeResidential = this.handleTypeChangeResidential.bind(this);
        this.handleTypeChangeCommercial = this.handleTypeChangeCommercial.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.testFunc = this.testFunc.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.loadProject = this.loadProject.bind(this);
        this.onSortEnd = this.onSortEnd.bind(this);
        this.imageRemoveCallback = this.imageRemoveCallback.bind(this);
    }
    componentDidMount() {
       this.loadAllProject();
    }


    onDrop(acceptedFiles){
        // console.log('onDrop', acceptedFiles);
        const req = getApiUrlWithParam('uploadImage', {projectId: this.state.currentProject.projectId});
        const formData = new FormData();

        acceptedFiles.forEach(file => {
            // req.attach(file.name, file)
            formData.append(file.name, file);
        });

        // console.log('axios', axios);
        axios.post(req, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            if (response && response.data) {
                this.setState({currentProject: {
                        ...this.state.currentProject,
                        images: response.data
                    }});
            }
            // this.loadProject(this.state.currentProject.projectId);
        })
    }

    renderDropZone() {
        return (
            <Dropzone onDrop={this.onDrop}>
                {({getRootProps, getInputProps}) => (
                    <section>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <div className='dropArea'>
                                Drop images here...
                            </div>
                        </div>
                    </section>
                )}
            </Dropzone>
        );
    }

    renderAddProject() {
        return (
           <div className='addButton'>
               {!this.state.isEditing &&
                   <Button onClick={this.onAddProjectClick} >
                       Add New Project
                   </Button>
               }
           </div>
        );
    }
    renderErrorMessage() {
        return (
            <div className="errorMessage">
                {this.state.error}
            </div>
        );
    }
    onAddProjectClick() {
        this.setState({isEditing: true});

        const req = getApiUrl('initialProject');
        axios.post(req)
            .then((response) => {
                if (response.data && response.data.id) {
                    this.handleChangeProjectId(response.data.id);
                }
            });
    }

    onNewProjectSaveClick() {

    }

    handleChangeProjectId(projectId) {
        this.setState({currentProject: {
                ...this.state.currentProject,
                projectId
            }});
    }

    handleChangeProjectName(event) {
        this.setState({currentProject: {
                ...this.state.currentProject,
                projectName: event.target.value
            }});
    }

    handleChangeDescription(event) {
        this.setState({currentProject: {
                ...this.state.currentProject,
                description: event.target.value
            }});
    }
    handleTypeChangeResidential() {
        this.setState({currentProject: {
                ...this.state.currentProject,
                type: PROJECT_TYPE.residential
            }});
    }
    handleTypeChangeCommercial() {
        this.setState({currentProject: {
                ...this.state.currentProject,
                type: PROJECT_TYPE.commercial
            }});
    }

    testFunc() {
        // console.log(this.state);
        this.loadProject(22);
    }

    handleSubmit(e) {
        e.preventDefault();
        // console.log('currentProject', this.state.currentProject);
        const req = getApiPostWithPayloadUrl();

        axios.post(
            req,
            {
                action: 'updateProject',
                project: this.state.currentProject
            }
        ).then(
            (response) => {
                // if (response && !response.message) {}
                this.loadAllProject();
                this.setState({currentProject: emptyProject});
                this.setState({isEditing: false});
            }
        );
    }

    loadAllProject() {
        const req = getApiUrl('getAllProjectsWithImages');
        axios.get(req)
            .then((response) => {
                // console.log('all projects', response);
                if (response && response.data) {
                    this.setState({allProject: response.data});
                }
            });
    }

    loadProject(projectId) {
        const url = getApiUrlWithParam('getProject', {projectId: projectId});
        // console.log('load project from ', url);
        axios.get(
            url
        ).then(response => {
            // console.log('response', response);
            if (response && response.data && response.data.project) {
                this.setCurrentProject(response.data.project, response.data.images);
            }
        });
    }

    setCurrentProject(project, images) {
        const {id, name, description, type} = project;
        const current = {
            projectId: id,
            projectName: name || '',
            description: description || '',
            type: type || PROJECT_TYPE.residential,
            images
        };

        this.setState({currentProject: current});
        // console.log('current project', current);
    }

    updateStateImage(images) {
        this.setState({currentProject: {
                ...this.state.currentProject,
                images: images,
            }});
    }
    onSortEnd({oldIndex, newIndex}) {
        const newImages = arrayMove(this.state.currentProject.images, oldIndex, newIndex);
        this.updateStateImage(newImages);
    }
    imageRemoveCallback(imageId) {
        // console.log('i got call back', imageId);
        const req = getApiUrlWithParam('deleteImage', {imageId: imageId});
        axios.post(req).then(() => {
            const images =  this.state.currentProject.images.filter(function (image) {
                return image.id !== imageId;
            });
            this.updateStateImage(images);
        });
    }

    renderImages(images) {
        return (
            <SortableImageList
                images={images}
                isUploadedImage={true}
                onSortEnd={this.onSortEnd}
                removeCallback={this.imageRemoveCallback}
                removable
                maxWidth={100}
                maxHeight={75}
            />
        );

    }

    renderEditProject() {
        const { currentProject } = this.state;
        const {
            projectId,
            projectName,
            description,
            type,
            images
        } = currentProject || {};

        return (
            <Form className='newProject'  onSubmit={this.handleSubmit} >
                <Form.Group controlId="formProjectName">
                    <Form.Control value={projectName} ref={node => this.projectName = node} type="text" placeholder="Project Name" onChange={this.handleChangeProjectName} />
                </Form.Group>

                <Form.Group controlId="formDescription">
                    <Form.Control value={description} ref={node => this.description = node} as="textarea" rows="5" placeholder="Project Description" onChange={this.handleChangeDescription}/>
                </Form.Group>

                <Form.Group controlId="formProjectType">
                    <Form.Check inline name='projectType' onClick={this.handleTypeChangeResidential} checked={type === PROJECT_TYPE.residential} label={PROJECT_TYPE.residential} type="radio" id={`new-${PROJECT_TYPE.residential}`} />
                    <Form.Check inline name='projectType' onClick={this.handleTypeChangeCommercial}  checked={type === PROJECT_TYPE.commercial} label={PROJECT_TYPE.commercial} type="radio" id={`new-${PROJECT_TYPE.commercial}`} />
                </Form.Group>

                {this.renderImages(images)}

                { this.renderDropZone()}
                {this.renderErrorMessage()}

                <Button variant="primary" type="submit">Save Project</Button>
            </Form>
        );
    }


    renderImageList(images){
        return (
            <div className='projectItemImageList'>
                { images.map(image => {
                    return <div className='projectItemImage'>
                        <FramedImage
                            isUploadedImage
                            name={image.path}
                            frameWidth={100}
                            frameHeight={75}
                            imageId={image.id}
                        />
                        </div>

                })}
            </div>
        );
    }

    editProject(project, images) {
        this.setState({isEditing: true});
        this.setCurrentProject(project, images);
        window.scrollTo(0, 0)
    }

    deleteProject(projectId) {
        const req = getApiUrlWithParam('deleteProject', {projectId: projectId});
        axios.post(req).then(() => this.loadAllProject());
    }


    renderProject(project, images) {
        const {id, name, description, type} = project;
        return (
            <div className='projectItem'>
                <div className='projectItemHeader'>
                    <div className='projectItemTitle'>
                        <div className='projectItemName'>{name}</div>
                        <div className='projectItemType'>- {type}</div>
                    </div>
                    <div>
                        <Button className='projectItemBtn' variant="primary" type="submit" onClick={() => this.editProject(project, images)}>Edit</Button>
                        <Button className='projectItemBtn' variant="danger" type="submit" onClick={() => this.deleteProject(id)}>Delete</Button>
                    </div>
                </div>
                <div className='projectItemInfo'>{description}</div>
                {this.renderImageList(images)}
            </div>
        )
    }

    renderAllProject() {
        const allProject = this.state.allProject;
        return (
            <div>
                <div className='allProjectItemTitle'>All Projects</div>
                <div className='allProjectItemList'>
                    {
                        allProject.map(({project, images}) => (this.renderProject(project, images)))
                    }
                </div>
            </div>
        );
    }

    render(){
        return (
            <div>
                <Header />
                <div className='adminProject'>
                    <div className='addProject'>
                        { this.state.isEditing && this.renderEditProject()}
                        {this.renderAddProject()}
                        { this.renderAllProject()}
                        <Button onClick={this.testFunc}>
                            Test
                        </Button>
                    </div>
                </div>
            </div>

        );
    }

}

export default AdminProjectPageComponent;
