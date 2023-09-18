/**
 * 
 * 
 * <div id="parent"> 
 *      <div id="child"> 
 *         <h1>I'm H1 Tag</h1> 
 *         <h2>I'm H2 Tag</h2> 
 *      </div>
 * 
 *     <div id="child2"> 
 *         <h1>I'm H1 Tag</h1> 
 *         <h2>I'm H2 Tag</h2> 
 *      </div>
 *  </div> 
 * 
 * ReactElement(Object) => HTML(Browser Understand)
 * 
 */

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },[
        React.createElement("h1", {}, "I'm H1 heading!"),
        React.createElement("h2", {}, "I'm H2 Tag")
    ]), 
    React.createElement(
        "div",
        { id: "child2" }, [
        React.createElement("h1", {}, "I'm H1 heading!"),
        React.createElement("h2", {}, "I'm H2 Tag")
    ]), 
    
 );

//JSX

// crossorigin - The purpose of crossorigin attribute is used to share the resources from one domain to another domain.


console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);