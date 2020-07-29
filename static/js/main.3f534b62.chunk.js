(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports={contactForm:"ContactForm_contactForm__1cHfZ"}},13:function(e,t,n){e.exports={App:"App_App__3fchc"}},14:function(e,t,n){e.exports=n(27)},27:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),l=n(8),i=n(2),m=n(3),u=n(4),s=n(6),d=n(5),h=n(11),p=n.n(h),b=n(12),f=n.n(b),C=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(i.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,c=n.number,r={id:p.a.generate(),name:a,number:c};e.props.addContact(r),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.handleSubmit,className:f.a.contactForm},c.a.createElement("label",null,"Name:",c.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,placeholder:"Enter Name..."})),c.a.createElement("label",null,"Number:",c.a.createElement("input",{type:"text",name:"number",value:this.state.number,onChange:this.handleChange,placeholder:"Enter Number..."})),c.a.createElement("button",{type:"submit"},"Add contact"))}}]),n}(a.Component),g=n(7),v=n.n(g),E=function(e){var t=e.name,n=e.number,a=e.onDelete;return c.a.createElement("li",{className:v.a.item},c.a.createElement("p",{className:v.a.itemName},t,": ",n),c.a.createElement("button",{type:"button",onClick:a,className:v.a.itemBtn},"delete"))},y=function(e){var t=e.contacts,n=e.onDelete;return c.a.createElement("ul",null,t.map((function(e){var t=e.id,a=e.name,r=e.number;return c.a.createElement(E,{key:t,name:a,number:r,onDelete:function(){return n(t)}})})))},N=function(e){var t=e.length,n=e.filter,a=e.handleChange;return c.a.createElement(c.a.Fragment,null,t>1&&c.a.createElement("label",null,"Find contacts by name",c.a.createElement("br",null),c.a.createElement("input",{type:"text",name:"filter",value:n,onChange:a,placeholder:"Enter name..."})))},O=n(13),S=n.n(O),_=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(i.a)({},a,c))},e.filteredContacts=function(){var t=e.state,n=t.contacts,a=t.filter;return n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},e.deleteContactById=function(t){var n=e.state.contacts.filter((function(e){return e.id!==t}));e.setState({contacts:Object(l.a)(n)})},e.addContact=function(t){if(!t.name||!t.number)return alert("Enter Name and Number to add contact"),!1;var n=t.name;e.state.contacts.map((function(e){return e.name.toLowerCase()})).includes(n.toLowerCase().trim())?alert("".concat(n," already in contacts")):e.setState((function(e){return{contacts:[].concat(Object(l.a)(e.contacts),[t])}}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){localStorage.getItem("contacts")&&this.setState({contacts:Object(l.a)(JSON.parse(localStorage.getItem("contacts")))}),console.log("DidMount")}},{key:"componentDidUpdate",value:function(e,t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts)),console.log("DidUpdate")}},{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=this.filteredContacts();return c.a.createElement("div",{className:S.a.App},c.a.createElement("h1",null,"Phonebook"),c.a.createElement(C,{addContact:this.addContact}),c.a.createElement("h1",null,"Contacts"),c.a.createElement(N,{length:t.length,filter:n,handleChange:this.handleChange}),c.a.createElement(y,{contacts:a,onDelete:this.deleteContactById}))}}]),n}(a.Component);o.a.render(c.a.createElement(_,null),document.getElementById("root"))},7:function(e,t,n){e.exports={item:"ContactListItem_item__1iRzO",itemName:"ContactListItem_itemName__42880",itemBtn:"ContactListItem_itemBtn__3nenQ"}}},[[14,1,2]]]);
//# sourceMappingURL=main.3f534b62.chunk.js.map