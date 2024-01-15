import Craftsmen from "../tabs/Craftsman";
import City from "../tabs/City";
import Lake from "../tabs/Lake";
import Home from "../tabs/Home"

export const SCREEN_NAMES = [
    {
        id: 0,
        name: 'home',
        icon: 'home',
        path: <Home/>,
    },
    {
        id: 1,
        name: 'Craftsmen',
        icon: 'paint-roller',
        path: <Craftsmen/>,
    },
    {
        id: 2,
        name: 'Cities',
        icon: 'building',
        path: <City />
    },
    {
        id: 3,
        name: 'Lakes',
        icon: 'user',
        path: <Lake/>
    },
    {
        id: 4,
        name: 'Mountains',
        icon: 'user',
        path: <Lake/>
    },
    {
        id: 5,
        name: 'Roads',
        icon: 'user',
        path: <Lake/>
    },
    {
        id: 6,
        name: 'Parks',
        icon: 'user',
        path: <Lake/>
    },

]

export const COLOR_OPTIONS = [
    {
        id: 0,
        name: 'Blue',
        value: '#c4e0f5'
    },
    {
        id: 1,
        name: 'Pink',
        value: '#ffdeef'
    },
    {
        id: 2,
        name: 'Green',
        value: '#deffee'
    },
    {
        id: 3,
        name: 'Yellow',
        value: '#fff5de'
    },

];