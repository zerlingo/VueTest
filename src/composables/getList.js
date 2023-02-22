// composable or composition function
import { ref } from "vue";

const getList = function () {
    const list = ref([]);
    const error = ref(null);
    const load = async () => {
        try {
            let data = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!data.ok) {
                throw new Error("No data available");
            }
            list.value = await data.json();
        }
        catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    }

    return { list, error, load }
}

export default getList;