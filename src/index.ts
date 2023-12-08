const formRef = document.querySelector(".form");
const showNameRef = document.querySelector(".showName");

const onFormSubmit = (e: any): void => {
  e.preventDefault();
  const name: string = e.currentTarget.elements.name.value;
  if (!name) {
    return;
  }

  if (showNameRef) {
    showNameRef.innerHTML = `name: ${name}`;
    return;
  }
};
formRef?.addEventListener("click", onFormSubmit);
