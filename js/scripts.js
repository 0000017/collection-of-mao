/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Call the navbar shrink function
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

 // 为每个项目名称、角色和时间添加事件监听器
const projectInfos = document.querySelectorAll('.project-info');

projectInfos.forEach(info => {
    info.addEventListener('click', () => {
        // 找到所有的工作内容详情，直到下一个项目
        let nextSibling = info.nextElementSibling;
        while (nextSibling && !nextSibling.classList.contains('project-info')) {
            if (nextSibling.classList.contains('work-content-detail')) {
                // 切换显示状态
                if (nextSibling.style.display === 'none' || nextSibling.style.display === '') {
                    nextSibling.style.display = 'block'; // 显示工作内容
                } else {
                    nextSibling.style.display = 'none'; // 隐藏工作内容
                }
            }
            nextSibling = nextSibling.nextElementSibling; // 移动到下一个兄弟元素
        }
    });
});
function toggleCopyButton() {
    // 获取按钮元素
    var copyButton = document.getElementById("copy-button");
    
    // 切换按钮的显示状态
    if (copyButton.style.display === "none" || copyButton.style.display === "") {
        copyButton.style.display = "inline-block"; // 显示按钮
    } else {
        copyButton.style.display = "none"; // 隐藏按钮
    }
}


function copyToClipboard() {
    // 获取电话号码元素文本
    var phoneNumber = document.getElementById("copy-switch").innerText;

    // 使用 Clipboard API 复制文本
    navigator.clipboard.writeText(phoneNumber)
        .then(function() {
            // 显示复制成功提示
            alert("电话号码已复制: " + phoneNumber);
        })
        .catch(function(error) {
            console.error("复制失败: ", error);
        });
}
});