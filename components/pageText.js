
const pageText= (data) => {
  const description = document.querySelector('.description');

  description.innerHTML = '';

  data.page_text.map((item) => {
    description.innerHTML += `
      <${item.tag}>${item.content}</${item.tag}>
    `
  });
}

export default pageText;