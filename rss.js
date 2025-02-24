fetch("https://raw.githubusercontent.com/Tarvey/Tarvey/refs/heads/main/news.rss") 
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    console.log(data);
    const items = data.querySelectorAll("item");
    let html = ``;
    items.forEach(el => {
      html += `
        <article id="post">
          <h3>
              ${el.querySelector("title").innerHTML}
          </h3>
          <p>
              ${el.querySelector("content").innerHTML}
          </p><br>
          <h5><i>
              Date: ${el.querySelector("date").innerHTML}
          </i></h5>
        </article>
      `;
    });
    document.getElementById('newsinner').innerHTML = html;
  });