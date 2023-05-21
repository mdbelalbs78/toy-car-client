import React from 'react';

const Blog = () => {
    return (
        <div className='mb-5 '>
            <button className='mb-5' onClick={generatePDF}>Download</button>
            
            <div className='border p-3 mb-3' id='pdf-element'>
                <h3>Tell us the differences between uncontrolled and controlled components</h3>
                <h4 className='mb-0 mt-4'>Uncontrolled Components:</h4>
                <p><small>In an uncontrolled component, the form input is managed by the browser. The component does not store the input value in its state, and the browser handles the updates to the input value.</small></p>
                <p><small>In an uncontrolled component, the form input is managed by the browser. The component does not store the input value in its state, and the browser handles the updates to the input value.</small></p>
                <h4>Controlled Components:</h4>
                <p><small>In a controlled component, the form input is managed by the component's state. The component stores the input value in its state, and updates to the input value are handled by the component.</small></p>
                <p><small>To retrieve the value of a controlled component, you can simply read the value from the component's state.</small></p>
            </div>
            <div className='border p-3 '>
                <h4>How to validate React props using PropTypes</h4>
                <li>PropTypes.any : The prop can be of any data type.</li>
                <li>PropTypes.bool : The prop should be a Boolean.</li>
                <li>PropTypes.number : The prop should be a number.</li>
                <li>PropTypes.string : The prop should be a string.</li>
                <li>PropTypes.func : The prop should be a function.</li>
                <li>PropTypes.array : The prop should be an array.</li>
            </div>
            <div className='border p-3 mt-3 '>
                 <h4>Tell us the difference between nodejs and express js</h4>
                 <li>nodejs: NodeJS is the package, which provides the JavaScript run-time environment</li>
                 <li>express js : Express is a framework that sits on top of NodeJS and helps us to handle requests and responses</li>
            </div>
            <div className='border p-3 mt-3 '>
                 <h4>What is a custom hook, and why will you create a custom hook?</h4>
                 <li>custom hook : A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks</li>
                 <li>why will create a custom hook? : Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</li>
            </div>
        </div>
    );
};

export default Blog;