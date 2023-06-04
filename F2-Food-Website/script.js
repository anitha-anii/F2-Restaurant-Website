function getMenu() {
    return fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
      .then(response => response.json())
      .then(data => {
        let menuContainer = document.getElementById('menu');
        let menuCardsContainer = document.createElement('div');
  
        data.forEach(item => {
          let menuCard = document.createElement('div');
          menuCard.className = "card";
  
          let image = document.createElement('img');
          image.src = item.imgSrc; 
          menuCard.appendChild(image);
  
          let para = document.createElement('p');
          para.innerText = `${item.name} - ${item.price}`;
          menuCard.appendChild(para);
  
          menuCardsContainer.appendChild(menuCard);
        });
  
        menuContainer.appendChild(menuCardsContainer);
  
        return data; 
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  function TakeOrder() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const burgers = [
          { name: 'Burger 1', price: '$5.99' },
          { name: 'Burger 2', price: '$6.99' },
          { name: 'Burger 3', price: '$7.99' }
        ];
        resolve(burgers);
      }, 2500);
    });
  }
  
  function orderPrep() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: false });
      }, 1500);
    });
  }
  
  function payOrder() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: true });
      }, 1000);
    });
  }
  
  async function thankyouFnc() {
    await new Promise(resolve => setTimeout(resolve, 0)); 
    alert("Thank you for eating with us today!");
  }
  
  async function handleOrder() {
    try {
      await getMenu();
  
      const order = await TakeOrder();
      console.log('Order:', order);
  
      const orderPreparation = await orderPrep();
      console.log('Order Preparation:', orderPreparation);
  
      const payment = await payOrder();
      console.log('Payment:', payment);
  
      if (payment.paid) {
        await thankyouFnc();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  handleOrder();
  

