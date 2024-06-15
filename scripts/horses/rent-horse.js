import { getApi } from "../api/getApi.js";
import { HorsesManager } from "./HorsesManager.js";
import { pagination } from "../helpers/pagination.js";

const container = document.getElementById('rent-horse-cards');
const paginationContainer = document.getElementsByClassName('rent-horse-pagination')[0];

document.addEventListener('DOMContentLoaded', async () => {
    const pageActive = sessionStorage.getItem('horsePageActive') ? sessionStorage.getItem('horsePageActive') : 1
    const limit = 4

    console.log(pageActive)
    const horsesRes = await getApi(`horses?_page=${pageActive}&_per_page=${limit}`);
    const horsesData = horsesRes.data;

    const horsesManager = new HorsesManager(horsesData, container); 
    horsesManager.createHorsesCards()

    const last = Math.ceil(horsesRes.items / limit)
    pagination(paginationContainer, last);
})