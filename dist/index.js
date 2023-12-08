"use strict";
const formRef = document.querySelector(".form");
const showNameRef = document.querySelector(".showName");
const onFormSubmit = (e) => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    if (!name) {
        return;
    }
    if (showNameRef) {
        showNameRef.innerHTML = `name: ${name}`;
        return;
    }
};
formRef === null || formRef === void 0 ? void 0 : formRef.addEventListener("click", onFormSubmit);
//# sourceMappingURL=index.js.map