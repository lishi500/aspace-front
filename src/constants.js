/**
 * Define any constants that need to be used application-wide
 */

// uri for API calls
const devBaseUrl = 'http://localhost/aspace';
const baseUrl = devBaseUrl;

export var apiUrl = baseUrl + '/public/api/api.php';
export const imageUrl = baseUrl + '/images/';
export const uploadUrl = baseUrl + '/upload/';
export let projectWidth = window.innerWidth - 400;

window.onresize = function(event) {
    projectWidth = window.innerWidth - 400;
    console.log(projectWidth);
};

export const imageList = [
    {
        src: "http://localhost/aspace/images/image1.png",
        width: 3600,
        height: 2080,
        name: 'lalahyu',
        type: 'residential',
        projectId: 1
    },
    {
        src: "http://localhost/aspace/images/image3.png",
        width: 929,
        height: 598,
        name: 'bacecawe',
        type: 'commercial ',
        projectId: 2
    },
    {
        src: "http://localhost/aspace/images/image4.png",
        width: 1024,
        height: 663,
        name: 'image4',
        type: 'commercial ',
        projectId: 3
    },
    {
        src: "http://localhost/aspace/images/image5.png",
        width: 928,
        height: 601,
        name: 'image5',
        type: 'commercial ',
        projectId: 4
    },
    {
        src: "http://localhost/aspace/images/image6.jpg",
        width: 600,
        height: 900,
        name: 'image6',
        type: 'commercial ',
        projectId: 5
    },
];

export const projectDetail = {
    projectId: 1,
    name: "AOYUAN @420 GEORGE",
    description: "AOYUAN @420 GEORGEIpsandae volupta cum harchiciis ea dolorum fuga. Itate non pel ipicto dollor rem aut vent quuntur rem dendaecusae voluptatem faccae doloreius si nonsequi blandae es aciates equiaest, omnienime que velest rerchiliam quo odi niendam, se saeperu mquiatenisci doloribusam reperia tionseq uaectaquis rem es doluptate vel idundunt molorenim quam utatur?Mentium doloriae eum ditis alignia necearum fuga. Esed magnati occum audandae seditat la consequam nessund andigenda andande necerio nsenemp orestibusda pligend itionsequunt qui dolum vendipsam secus eaquas re nust, aut facil illant.\n Voluptatur, venihil magnam fuga. Uptae vel il ipsam qui verferc imiliquid minctam hilluptatur sam, temperum eate cum earume sit ommolor ectur? Udae provit late nam quiat.",
    type: 'commercial ',
    frontImage: "http://localhost/aspace/images/image1.png",
    images: [
        {
            src: "http://localhost/aspace/images/image1_1.png",
            width: 1185,
            height: 840,
            sort: 0
        },
        {
            src: "http://localhost/aspace/images/image1_2.png",
            width: 1185,
            height: 840,
            sort: 1
        },
        {
            src: "http://localhost/aspace/images/image1_3.png",
            width: 1194,
            height: 836,
            sort: 3
        },
        {
            src: "http://localhost/aspace/images/image1_4.png",
            width: 1194,
            height: 841,
            sort: 5
        },
        {
            src: "http://localhost/aspace/images/image1_5.png",
            width: 1194,
            height: 836,
            sort: 2
        },
        {
            src: "http://localhost/aspace/images/image1_6.png",
            width: 1194,
            height: 841,
            sort: 7
        },
        {
            src: "http://localhost/aspace/images/image1_7.png",
            width: 1194,
            height: 841,
            sort: 4
        },
        {
            src: "http://localhost/aspace/images/image1_8.png",
            width: 1194,
            height: 841,
            sort: 6
        },
    ]
};

export const staffList = [
    {
        image: {path: 'staff1.png'},
        fName: 'Kai',
        lName: 'Yu',
        position: 'Design Director',
        info: 'Kai is an Award-winning Interior designer and the founder and owner of Aspace. Kai has over 5 years of professional experience in all aspects of Interior Design. She won the prize of Australian Interior design student awards at the year she graduated from Enmore design Center in Sydney. She is the creative driving force behind the business, directing all projects from conceptualisation to completion. Kai’s talent and achievements were recognised when her design won Master builder Awards 2013 across Australia & New Zealand. Also, her design has been shortlisted Sydney Design Awards 2014. Additionally, Kai has a Bachelor degree in Economics Marketing. Kai’s expertise is across a variety of projects, including the corporate, retail and hospitality sectors.\n' +
            '\n' +
            '2009 – 2010 The World is Round Pty Ltd. \n' +
            '2010 – 2013 Siren Design Group \n' +
            '2013 – Present A Space'
    },
    {
        image: {path: 'staff2.png'},
        fName: 'Emily',
        lName: 'Hatton',
        position: 'Interior and Graphic Designer',
        info: 'Emily completed her Design degree at UNSW: Art & Design with majors in Spatial and Graphic design and a minor in Textile design. She is a multidisciplinary designerwith a keen interest and passion for improving the experiences of and relationships between humans and the spaces they inhabit. She has worked as a creative freelancer since 2012, primarily centred on graphic design as well as working throughout the cultural sector; designing lighting displays and artworks for Palace Cinema film Festivals as well as producing large scale artworks in collaboration with Ambience Productions for “The Big Day Out”. Her ambition is to design spaces that provide a direct response and support to users physical and psychological needs. She has worked as an interior and Graphic Designer on numerous Aspace projects throughout corporate, retail and hospitality sectors.'
    },
];
