const images = document.querySelectorAll('.FFVAD');

images // Find src from NodeList

let imageUrlArray = [];

images.forEach(img => imageUrlArray.push(img.src));

imageUrlArray

copy(imageUrlArray) // copies all of array

[
    "https://scontent-den4-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.455.1170.1170a/s640x640/217535319_222847242914120_1771548283094550800_n.jpg?_nc_ht=scontent-den4-1.cdninstagram.com&_nc_cat=108&_nc_ohc=s51b6B4Knk4AX9rs8lb&edm=ABfd0MgBAAAA&ccb=7-4&oh=584620c509250b958ce8f37dc58ce043&oe=61128DBE&_nc_sid=7bff83",
    "https://scontent-den4-1.cdninstagram.com/v/t51.2885-15/e35/c0.210.540.540a/205873675_764953764200011_4436481274272095293_n.jpg?_nc_ht=scontent-den4-1.cdninstagram.com&_nc_cat=107&_nc_ohc=na1aSxoV6BYAX9jthtE&edm=ABfd0MgBAAAA&ccb=7-4&oh=4f13b52fa8037a5560287f1c3d90b145&oe=61129D8B&_nc_sid=7bff83",
    "https://scontent-den4-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.455.1170.1170a/s640x640/206430942_236929934906330_8819830168338136405_n.jpg?_nc_ht=scontent-den4-1.cdninstagram.com&_nc_cat=102&_nc_ohc=6h_444-0Mt4AX-9j34a&edm=ABfd0MgBAAAA&ccb=7-4&oh=7c5aa9a296711c4c23cfcf17b0029397&oe=6112927B&_nc_sid=7bff83",
    "https://scontent-den4-1.cdninstagram.com/v/t51.2885-15/e35/c157.0.405.405a/164496981_435322811103665_1943519989083453877_n.jpg?_nc_ht=scontent-den4-1.cdninstagram.com&_nc_cat=105&_nc_ohc=1_XTA6jDKMoAX_ocph6&edm=ABfd0MgBAAAA&ccb=7-4&oh=dab1f61ef016c4575debee99d4e92248&oe=6112AD43&_nc_sid=7bff83",
    "https://scontent-den4-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/155042963_740422206869022_2501137820431520601_n.jpg?_nc_ht=scontent-den4-1.cdninstagram.com&_nc_cat=106&_nc_ohc=cO_9fEo1TAIAX_LWEcb&edm=ABfd0MgBAAAA&ccb=7-4&oh=cdb0df01c1652e21ef618921913a0db7&oe=61180400&_nc_sid=7bff83"
]