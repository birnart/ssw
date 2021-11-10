const cardInfoTogglerOne = () => {
    const infoTogBtnOne = document.getElementById('toggler-a');
    const infoTogBoxOne = document.getElementById("info-toggle-a");
    const togArrowOne = document.getElementById('tog-arrow-a');
  
    infoTogBtnOne.addEventListener('click', (event) => {
      console.log(event);
      infoTogBoxOne.classList.toggle('hidden')
      togArrowOne.classList.toggle('fa-sort-down')
      togArrowOne.classList.toggle('fa-sort-up')
    });
  };
  
  export { cardInfoTogglerOne };
  
  // box two:
  const cardInfoTogglerTwo = () => {
    const infoTogBtnTwo = document.getElementById('toggler-b');
    const infoTogBoxTwo = document.getElementById("info-toggle-b");
    const togArrowTwo = document.getElementById('tog-arrow-b');
  
    infoTogBtnTwo.addEventListener('click', (event) => {
      console.log(event);
      infoTogBoxTwo.classList.toggle('hidden')
      togArrowTwo.classList.toggle('fa-sort-down')
      togArrowTwo.classList.toggle('fa-sort-up')
    });
  };
  
  export { cardInfoTogglerTwo };
  
  // box three:
  const cardInfoTogglerThree = () => {
    const infoTogBtnThree = document.getElementById('toggler-c');
    const infoTogBoxThree = document.getElementById("info-toggle-c");
    const togArrowThree = document.getElementById('tog-arrow-c');
  
    infoTogBtnThree.addEventListener('click', (event) => {
      console.log(event);
      infoTogBoxThree.classList.toggle('hidden')
      togArrowThree.classList.toggle('fa-sort-down')
      togArrowThree.classList.toggle('fa-sort-up')
    });
  };
  