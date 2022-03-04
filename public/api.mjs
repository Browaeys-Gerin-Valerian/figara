const deleteArticle = document.querySelector("#delete")


deleteArticle.forEach((elToDelete) => {
    console.log("VA BIEN TE FAIRE FOUTRE LE SCRIPT")
    elToDelete.addEventListener("click", () => {
        const id = elToDelete.dataset.id;
        axios
            .delete(`http://localhost:3000/admin/article/delete/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    window.location.replace("http://localhost:3000/admin/articles");
                }
            })
            .catch((err) => console.log("catch", err));
    });
});