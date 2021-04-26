require('./bootstrap');

import { createApp, reactive } from 'vue';
import SearchDropdown from "./components/SearchDropdown";

createApp({
    name: 'App',
    components: { SearchDropdown },
    props: { },
    setup: (() => {
    })
}).mount("#app");
