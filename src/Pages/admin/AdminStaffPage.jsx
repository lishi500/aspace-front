import React from 'react';
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

const emptyStaff = {
    id: 0,
    name: '',
    position: '',
    info: '',
    image: null
};

export class AdminStaffPageComponent extends React.Component {
    constructor(props) {
        super(props);

        const loginToken = Cookies.get('loginToken');
        if (!loginToken) {
            this.props.history.push(`/admin`);
        }

        this.state = {
            isEditing: false,
            currentStaff: emptyStaff,
            allStaff: []
        };
        axios.defaults.withCredentials = true;
        this.initStaff = this.initStaff.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.imageRemoveCallback = this.imageRemoveCallback.bind(this);
        this.handleChangeStaffId =  this.handleChangeStaffId.bind(this);
        this.handleChangeStaffName =  this.handleChangeStaffName.bind(this);
        this.handleChangeStaffPosition = this.handleChangeStaffPosition.bind(this);
        this.handleChangeStaffInfo =this.handleChangeStaffInfo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.loadAllStaff();
    }

    loadAllStaff() {
        const req = getApiUrl('getAllStaff');
        axios.get(req)
            .then((response) => {
                console.log('load all staff', response);
                if (response && response.data) {
                    this.setState({allStaff: response.data});
                }
        });
    }

    initStaff() {
        this.setState({isEditing: true});

        const req = getApiUrl('addStaff');
        axios.post(req)
            .then((response) => {
                if (response.data && response.data.id) {
                    this.handleChangeStaffId(response.data.id);
                }
            });
    }

    handleChangeStaffId(id) {
        this.setState({currentStaff: {
                ...this.state.currentStaff,
                id
            }});
    }

    handleChangeStaffName(event) {
        this.setState({currentStaff: {
                ...this.state.currentStaff,
                name: event.target.value
            }});
    }

    handleChangeStaffPosition(event) {
        this.setState({currentStaff: {
                ...this.state.currentStaff,
                position: event.target.value
            }});
    }

    handleChangeStaffInfo(event) {
        this.setState({currentStaff: {
                ...this.state.currentStaff,
                info: event.target.value
            }});
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('currentStaff', this.state.currentStaff);
        const req = getApiPostWithPayloadUrl();

        axios.post(
            req,
            {
                action: 'updateStaff',
                staff: this.state.currentStaff
            }
        ).then(
            (response) => {
                this.loadAllStaff();
                this.setState({currentStaff: emptyStaff});
                this.setState({isEditing: false});
            }
        );
    }

    editStaff(staff) {
        this.setState({isEditing: true, currentStaff: staff});
        window.scrollTo(0, 0)
    }

    deleteStaff(id) {
        const req = getApiUrlWithParam('deleteStaff', {id: id});
        axios.post(req).then(() => this.loadAllStaff());
    }

    renderAddStaffButton() {
        return (
            <div className='addButton'>
                {!this.state.isEditing &&
                <Button onClick={this.initStaff} >
                    Add New Staff
                </Button>
                }
            </div>
        );
    }

    onDrop(acceptedFiles){
        console.log('onDrop', acceptedFiles);
        const req = getApiUrlWithParam('uploadImage', {staffId: this.state.currentStaff.id});
        const formData = new FormData();

        acceptedFiles.forEach(file => {
            formData.append(file.name, file);
        });


        axios.post(req, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            console.log('response data', response.data);
            if (response && response.data) {
                this.setState({currentStaff: {
                        ...this.state.currentStaff,
                        image: response.data[0]
                    }});
            }
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
                                Drop image here...
                            </div>
                        </div>
                    </section>
                )}
            </Dropzone>
        );
    }

    updateStateImage(images) {
        this.setState({currentStaff: {
                ...this.state.currentStaff,
                image: images,
            }});
    }

    onSortEnd() {}
    imageRemoveCallback(imageId) {
        const req = getApiUrlWithParam('deleteImage', {imageId: imageId});
        axios.post(req).then(() => {
            this.updateStateImage(null);
        });
    }

    renderImages(images) {
        return (
            <SortableImageList
                images={[images]}
                isUploadedImage={true}
                onSortEnd={this.onSortEnd}
                removeCallback={this.imageRemoveCallback}
                removable
                maxWidth={100}
                maxHeight={75}
            />
        );
    }

    renderImage(image) {
        return (
            <React.Fragment>
                {image &&
                <div className='projectItemImage'>
                    <FramedImage
                        isUploadedImage
                        name={image.path}
                        frameWidth={70}
                        frameHeight={100}
                        imageId={image.id}
                    />
                </div>
                }
            </React.Fragment>
        );

    }

    renderStaffForm() {
        const { currentStaff } = this.state;
        const {
            image,
            name,
            position,
            info
        } = currentStaff || {};

        return (
            <Form className='newProject'  onSubmit={this.handleSubmit} >
                <Form.Group controlId="formStaffName">
                    <Form.Control value={name} ref={node => this.name = node} type="text" placeholder="Staff Name" onChange={this.handleChangeStaffName} />
                </Form.Group>

                <Form.Group controlId="formStaffPosition">
                    <Form.Control value={position} ref={node => this.position = node} type="text" placeholder="Staff Position" onChange={this.handleChangeStaffPosition} />
                </Form.Group>

                <Form.Group controlId="formStaffInfo">
                    <Form.Control value={info} ref={node => this.info = node} as="textarea" rows="5" placeholder="Staff Info" onChange={this.handleChangeStaffInfo}/>
                </Form.Group>

                {image && this.renderImages(image)}

                { this.renderDropZone()}


                <Button variant="primary" type="submit">Save Staff</Button>
            </Form>
        );
    }


    renderStaffList() {
        const allStaff = this.state.allStaff;
        return (
            <div>
                <div className='allProjectItemTitle'>All Staffs</div>
                <div className='allProjectItemList'>
                    {
                        allStaff.map((staff) => (this.renderStaffItem(staff)))
                    }
                </div>
            </div>
        );
    }

    renderStaffItem(staff) {
        console.log(staff);
        const {id, name, position, info, image} = staff;
        return (
            <div className='projectItem'>
                <div className='projectItemHeader'>
                    <div className='projectItemTitle'>
                        <div className='projectItemName'>{name}</div>
                        <div className='projectItemType'>- {position}</div>
                    </div>
                    <div>
                        <Button className='projectItemBtn' variant="primary" type="submit" onClick={() => this.editStaff(staff)}>Edit</Button>
                        <Button className='projectItemBtn' variant="danger" type="submit" onClick={() => this.deleteStaff(id)}>Delete</Button>
                    </div>
                </div>
                <div className='projectItemInfo'>{info}</div>
                {this.renderImage(image)}
            </div>
        )
    }

    render() {
        return (
            <div>
                <Header />
                <div className='adminProject'>
                    <div className='addProject'>
                        { this.state.isEditing && this.renderStaffForm()}
                        {this.renderAddStaffButton()}
                        { this.renderStaffList()}
                        <Button onClick={this.testFunc}>
                            Test
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

}

export default AdminStaffPageComponent;