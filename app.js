const $images = $("#images");
const $searchInput = $("#search-input");

function addGif(r){
    let $newGif = $("<img>", {src: r.data[0].images.original.url});
    $images.append($newGif);
}

$("form").on("submit", async function(e) {
    e.preventDefault();
    let searchInput = $searchInput.val();
    $searchInput.val("");
    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
      params: {
        q: searchInput,
        api_key: "GuUxlJdRwkIV18KZS88qQWEbzu2K8dLf"
      }
    });
    addGif(res.data);
  });
$('#delete-button').on('click', function () {
    $images.empty()
   })