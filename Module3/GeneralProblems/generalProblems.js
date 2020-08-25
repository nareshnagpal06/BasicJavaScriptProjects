// find minimum number in an array

function GetMinimum(numbers)
{
   
    let length=numbers.length;
    let minimum=numbers[0];
    for(let i=1;i<length;i++)
    {
        if(minimum>numbers[i])
        minimum=numbers[i];
    }
    return minimum;

}


console.log(GetMinimum([29,12,9,8,7,16,19]));


console.log(GetMinimum([5,8,0,8,7,3]));

// find maximum number in an array

function Getmaximum(numbers)
{
   
    let length=numbers.length;
    let maximum=numbers[0];
    for(let i=1;i<length;i++)
    {
        if(maximum<numbers[i])
        maximum=numbers[i];
    }
    return maximum;

}


console.log(Getmaximum([29,12,9,8,7,16,19]));


console.log(Getmaximum([5,8,0,18,7,3]));


// sort elements - bubble sort

function bubbleSort(numbers)
{
    let sortedNumbes=[];
    let current;
    for(let i=0;i<numbers.length;i++)
    {
       for(let j=1;j<numbers.length;j++)
       {
        if(numbers[j]<numbers[j-1])
        {
        current=numbers[j];
        numbers[j]=numbers[j-1];
        numbers[j-1]=current;
        }
    }
    }
    return numbers;
    
}



console.log(bubbleSort([5,6,18,8,8,7,1]));
console.log(bubbleSort([7,6]));


