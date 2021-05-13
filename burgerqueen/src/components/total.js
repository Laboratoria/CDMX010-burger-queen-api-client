const total = (props) => {
    let sum = 0;
    const ArrBreakfast = props.breakfast;
    const ArrLunch = props.lunch;

    ArrBreakfast.forEach(price => {sum+=price});

    ArrLunch.forEach(price => {sum+=price});
    return sum
}

export default total;