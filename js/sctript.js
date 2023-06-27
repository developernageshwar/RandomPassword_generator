

const UpperSet =" ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerSet = "abcdefghijklmnopqrstuvwxyz";
const NumberSet = "1234567890"
const symbols = "!@#$%^&*"


const PassBox = document.getElementById('pass-box');
const TotalCharInput = document.getElementById('TotalChar');
const UpperInput = document.getElementById('Upper-Case');
const LowerInput = document.getElementById('Lower-Case')
const NumberInput = document.getElementById('Numbers')
const SymbolsInput = document.getElementById('Symbols')



const GenerateRandomData = (dataSet)=>{
    return dataSet[Math.floor(Math.random()*dataSet.length)]

}


const generateRandomPassword =(password = '')=>{
    if(UpperInput.checked){
        password += GenerateRandomData(UpperSet)

    }
    if(LowerInput.checked){
        password += GenerateRandomData(LowerSet)
    }

    if(NumberInput.checked){
        password += GenerateRandomData(NumberSet)
    }
    if(SymbolsInput.checked){
        password += GenerateRandomData(symbols)
    }
    if(password.length<TotalCharInput.value){
        return  generateRandomPassword(password)
     }

    PassBox.innerText= truncatestring(password,TotalCharInput.value)
}
generateRandomPassword();



document.getElementById('Generate-password').addEventListener('click',function(){
    generateRandomPassword()

})

function truncatestring(str,num){
    if(str.length>num){
        let subStr  = str.substring(0,num)
        return  subStr;
    }else {
        return str;
    }

}








