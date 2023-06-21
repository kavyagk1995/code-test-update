
fetch('code-test.json')
    .then((response) => response.json())
    .then((json) => {
        console.log("Json : ",json)
        let items = ""
        json.articles.forEach((i)=>{
            items+=`<div class="divElem"> <div><a href="${i.link}"> ${i.primarySectionRouteName}</a><h2>${i.headline}</h2><p>${i.standfirst}</P></div><div><img src="${i.thumbnail.src}" width="${i.thumbnail.width}" height="${i.thumbnail.height}"></div></div><hr>`
        })
        document.getElementById("container").innerHTML = items;
    });
