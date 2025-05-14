// //your JS code here. If required.
// const form = document.queryselector('#userform');
// form.addEventListner('submit', function(e) {
// 	e.preventDefault();
// 	const firstname = forms.elements["First Name"].value;
// 	const lastName = form.elements["Last Name"].value;
//     const phone = form.elements["Phone Number"].value;
//     const email = form.elements["Email ID"].value;
// 	alert(
//         `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phone} Email ID: ${email}`
//       );
// });

const form = document.getElementById('userForm');

    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent actual form submission

      const firstName = form.elements["First Name"].value;
      const lastName = form.elements["Last Name"].value;
      const phone = form.elements["Phone Number"].value;
      const email = form.elements["Email ID"].value;

      alert(
        `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phone} Email ID: ${email}`
      );
    });