import React from "react";

class ButtonsGame extends React.Component {

  arr = [
    {
      id: 1,
      name: 'Brasil',
      isSelected: false
    },
    {
      id: 2,
      name: 'Estados Unidos',
      isSelected: false
    },
    {
      id: 3,
      name: 'Babilonia',
      isSelected: false
    },
    {
      id: 4,
      name: 'Espanha',
      isSelected: false
    }
  ];

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      arr: this.arr
    }
  }


  checkIfMatch = (obj, index) => {
    obj.isSelected = !obj.isSelected;
    let arrCopy = [...this.state.arr]; // shallow copy of arr
    arrCopy[index] = obj;

    for(let i = 0; i < arrCopy.length; i++) {

      if(obj.isSelected === arrCopy[i].isSelected && index !== i) {
        let firstLetterA = obj.name.charAt(0);
        let firstLetterB = arrCopy[i].name.charAt(0);

        if(firstLetterA === firstLetterB) {
          arrCopy.splice(index, 1);
          arrCopy.splice(i, 1);
          console.log('array after splice => ', arrCopy);
        }
      }
    }

    this.setState({arr: arrCopy});
    console.log('new state => ', this.state.arr)
  }

  render() {
    return (
      <div>
        {
          this.state.arr.map((obj, index) => {
            return (
              <div key={obj.id}>
                <button onClick={() => this.checkIfMatch(obj, index)}> {obj.name} </button>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default ButtonsGame;