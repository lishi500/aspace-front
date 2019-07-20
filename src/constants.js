/**
 * Define any constants that need to be used application-wide
 */

// uri for API calls
const devBaseUrl = 'http://localhost/aspace';
const prodDevUrl = 'http://localhost';
const prodDemoUrl = 'https://lis.sgedu.site';
const productionUrl = 'http://www.aspacedesign.com.au';
const baseUrl = prodDemoUrl;

export var apiUrl = baseUrl + '/public/api/api.php';
export const imageUrl = baseUrl + '/images/';
export const uploadUrl = baseUrl + '/upload/';
export let projectWidth = window.innerWidth - 400;

window.onresize = function(event) {
    // projectWidth = window.innerWidth - 400;
    // console.log(projectWidth);
};

export const photosList = [
    {
        src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
        width: 8,
        height: 6
    },
    {
        src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
        width: 2,
        height: 2
    },
    {
        src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
        width: 6,
        height: 8
    },
    {
        src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
        width: 6,
        height: 8
    },
    {
        src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
        width: 3,
        height: 4
    },
    {
        src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
        width: 4,
        height: 3
    },
    {
        src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
        width: 3,
        height: 4
    },
    {
        src: "https://source.unsplash.com/PpOHJezOalU/800x599",
        width: 4,
        height: 3
    },
    {
        src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
        width: 4,
        height: 3
    }
];


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
        name: 'Eka Andriani',
        position: 'Creative Director',
        info:'With more than 15 yrs experience, Eka offers immense knowledge and expertise in architecture and design within a broad range of sectors. With a focus on interior architecture, Eka has commissioned work and built positive working relationships with commercial and retail leaders.\n' +
            'Her industry experience and highly regarded reputation places her in good stead to offer you the utmost level of quality design and results that you require to get your project completed in a timely and cost effective manner.\n' +
            'Eka and her team will work closely with you to ensure that you have the design that you are comfortable with and aspire to for years to come'
    },
    {
        image: {path: 'staff2.png'},
        name: 'Kai Yu',
        position: 'General manager',
        info: 'Kai is an Award-winning Interior designer and the founder and owner of A SPACE. Kai has over 9 years of professional experience in all aspects of Interior Design.\n' +
            'She is the creative driving force behind the business, directing all projects from conceptualisation to completion. Kai’s talent and achievements were recognised when her design won Master builder Awards 2013 across Australia & New Zealand. Also, her design has been short listed Sydney Design Awards 2014.\n' +
            'Kai has a Bachelor degree in Economics Marketing, She enjoys apply her business knowledge to a creative environment to make sure our clients get the best outcome from a certain budget.\n' +
            'Kai’s expertise is across a variety of projects, including the corporate, retail and residential sectors.'
    },
];
