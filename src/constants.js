/**
 * Define any constants that need to be used application-wide
 */

// uri for API calls
const devBaseUrl = 'http://localhost/aspace';
const baseUrl = devBaseUrl;

export var apiUrl = baseUrl + '/public/api/api.php';
export const imageUrl = baseUrl + '/images/';
export const uploadUrl = baseUrl + '/upload/';



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