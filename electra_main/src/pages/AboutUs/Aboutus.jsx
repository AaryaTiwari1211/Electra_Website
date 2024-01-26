import React from 'react'

const AboutUs = () => {
    function toggleCollapsible() {
        var collapsibleContent = document.getElementById("collapsibleContent");
        collapsibleContent.classList.toggle("active");
    }
    return (
        <div>AboutUs</div>
    )
}

export default AboutUs