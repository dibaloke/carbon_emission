/*let List=document.querySelector('#list ul');
List.addEventListener('click',function(e){
   if(e.target.className=='delete')
   {
    const li=e.target.parentElement;
    li.parentNode.removeChild(li);
    }



});
const addForm=document.forms[0];
addForm.addEventListener('submit',function(e){
      e.preventDefault();
      const value=addForm.querySelector('input[type="text"]').value
      const li=document.createElement('li');
      const todothing=document.createElement('span');
      const deletebtn=document.createElement('span');
      todothing.textContent=value;
      deletebtn.textContent='Delete';
      todothing.classList.add('todo');
      deletebtn.classList.add('delete');
      li.appendChild(todothing);
      li.appendChild(deletebtn);
      List.appendChild(li);







});
*/