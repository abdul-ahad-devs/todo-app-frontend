import apiService from "./api.service";

export async function getToDos({ page, itemsPerPage }, setData) {
  try {
    const { data } = await apiService.get(
      `/todo?page=${page}&itemsPerPage=${itemsPerPage}`
    );
    if (data) {
      setData(data.items);
    }
  } catch (err) {
    alert("Error in getting todos.");
  }
}
