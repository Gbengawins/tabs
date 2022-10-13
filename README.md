# 30 Days of React Coding

This project is a refresher personal coding challenge for React. It begins with React components and shall progress through the backend using MongoDB. Mongoose shall provide the bulk of the models Schema where/when necessary.

## Day - 1 - Tabs

    This project Renders a tabbed menu and view component.

#### Tasks
[ ] - Define a <CODE>Tabs</CODE> component. Use the <CODE>useState()</CODE> hook to initialize the value of the <CODE>bindIndex</CODE> state variable to <CODE>defaultIndex</CODE>.


[ ] - Define a <CODE>TabItem</CODE> component and filter children passed to the Tabs component to remove unnecessary nodes except for TabItem by identifying the function's name.


[ ] - Define <CODE>changeTab</CODE>, which will be executed when clicking a <CODE>button</CODE> from the menu.


[ ] - <CODE>changeTab</CODE> executes the passed callback, <CODE>onTabClick</CODE>, and updates bindIndex based on the clicked element.

[ ] - Use <CODE>Array.prototype.map()</CODE> on the collected nodes to render the menu and view of the tabs.

[ ] - Use the value of <CODE>bindIndex</CODE> to determine the active tab and apply the correct className.
