import { reactive } from "vue";

export const store = reactive({
    weDoIcons: [

        {
            image: '/img/image(14).svg',
            title: 'ARRAY OF EQUIPMENT',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pellentuesque ultricies justo tellus',

        }, {
            image: '/img/image(16).svg',
            title: 'NEW TECHNOLOGIES',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pellentuesque ultricies justo tellus',

        }, {
            image: '/img/image(18).svg',
            title: 'VERSATILE ACTORS',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pellentuesque ultricies justo tellus',

        }, {
            image: '/img/image(15).svg',
            title: 'TOP DIRECTORS',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pellentuesque ultricies justo tellus',

        }, {
            image: '/img/image(17).svg',
            title: 'MINUTE EDITING',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pellentuesque ultricies justo tellus',

        }, {
            image: '/img/image(19).svg',
            title: 'VERSATILE ACTORS',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pellentuesque ultricies justo tellus',

        },
    ],
    weDoImages: [

        {
            image: '/img/Gallery-01.jpg',
            title: 'SEVENTEENTH SUMMER',
            text: 'Commercial, Music Video'
        },
        {
            image: '/img/Gallery-02.jpg',
            title: 'A MESSAGE TO SPACE',
            text: 'Short Film'
        },
        {
            image: '/img/Gallery-03.jpg',
            title: 'THE MOST BEAUTIFUL THING',
            text: 'Music Video'
        },
        {
            image: '/img/Gallery-04.jpg',
            title: 'PERMISSION TO SPEAK',
            text: 'Documentary'
        },
        {
            image: '/img/Gallery-05.jpg',
            title: 'EXPLORE OUR SPACE',
            text: 'Film Noir'
        },
        {
            image: '/img/Gallery-06.jpg',
            title: 'FILM PRODUCTION',
            text: 'Blaxploitation'
        },

    ],

    aboutUs: {

        image: '/img/About-Us.jpg',
        subt: 'ABOUT US',
        title: 'HIGH QUALITY CINEMATICS',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi architecto nemo tempora voluptatum adipisci a beatae animi quia perspiciatis voluptatem inventore velit odit placeat est quibusdam, sit explicabo eveniet ex officiis aliquam ab ratione perferendis iste? Itaque dolorum quo eius.'

    },

    parallax1: [{

        image: '/img/parallax-01.jpg'

    }],

    parallax2: [

        {
            image: './img/parallax-02.jpg',
            cst: '158 satisfied customers',
            prj: '3+ our projects',
            cc: '1,906 cups of coffee',
            awards: '2 our awards'
        }
    ],

    parallax3: [
        {

            image: './img/parallax-03.jpg',
            icon: './img/image(20).svg',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure saepe unde fugiat aperiam tenetur! Numquam excepturi voluptate a. Optio aspernatur itaque vel numquam repellendus voluptas sunt officiis enim adipisci recusandae.',
            pic: './img/01.jpg',
            name: 'JOHN DOE',
            job: 'Designer'

        },
        {

            icon: './img/image(20).svg',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure saepe unde fugiat aperiam tenetur! Numquam excepturi voluptate a. Optio aspernatur itaque vel numquam repellendus voluptas sunt officiis enim adipisci recusandae.',
            pic: './img/02.jpg',
            name: 'JOHN DOE',
            job: 'Designer'

        },
        {

            icon: './img/image(20).svg',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure saepe unde fugiat aperiam tenetur! Numquam excepturi voluptate a. Optio aspernatur itaque vel numquam repellendus voluptas sunt officiis enim adipisci recusandae.',
            pic: './img/03.jpg',
            name: 'JOHN DOE',
            job: 'Designer'

        },
    ]
});