<script>
    const formEl = document.querySelector('.form');

    formEl.addEventListener('submit' , event => {
      event.preventDefault();

      const formData = new formData(formEl);
      const data = Object.fromEntries(formData);

      console.log('data);
    

    });
  </script> 