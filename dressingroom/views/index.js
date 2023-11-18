document.addEventListener("DOMContentLoaded", function () {
    const tryOnButtons = document.querySelectorAll('.btn-primary');
    const modalBody = document.querySelector('.modal1 .body');
    const model = document.querySelector('.modal1 .model');
  
    tryOnButtons.forEach(button => {
      button.addEventListener('click', function () {
        // Lấy đường dẫn ảnh và tiêu đề từ thẻ card tương ứng
        const imgSrc = this.parentElement.querySelector('img').src;
        const title = this.parentElement.querySelector('.card-title').innerText;
  
        // Cập nhật nội dung modal với sản phẩm được chọn
        modalBody.innerHTML = `<img src="${imgSrc}" alt="${title}" class="modal-img">`;
        model.innerHTML = `<h3>${title}</h3><img src="${imgSrc}" alt="${title}" class="modal-img">`;
  
        // Mở modal
        const myModal = new bootstrap.Modal(document.getElementById('myModal1'));
        myModal.show();
      });
    });
  });
  