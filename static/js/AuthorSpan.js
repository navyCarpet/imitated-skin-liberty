window.onload = function() {
    document.querySelectorAll("a[href^='/w/사용자:']").forEach(item => {
        const popover = document.createElement('div');
        popover.style.display = 'none';
        popover.style.zIndex = 9999;
        popover.style.position = 'absolute';
        popover.style.top = '25px';
        popover.style.right = '0px';
        popover.innerHTML = `
        <div class="tooltip-inner popover-inner" style="align-items: center;display: flex;gap: 0.5rem;position: relative; background: #f9f9f9; border-radius: 5px; box-shadow: 0 5px 30px rgba(0, 0, 0, .2); color: #000; padding: 16px;">
            <a href="/contribution/author/${item.textContent}/document" class="btn btn-secondary btn-sm">기여내역</a><a href="${item.href}" class="btn btn-primary btn-sm">사용자 문서</a>
        </div>
        <div class="tooltip-arrow popover-arrow" style="border-style: solid; height: 0; margin: 5px; position: absolute; width: 0; z-index: 1; border-width: 0 5px 5px; right: 5px; margin-bottom: 0; margin-top: 0; top: -5px; border-left-color: transparent !important; border-right-color: transparent !important; border-top-color: transparent !important; border-color: #f9f9f9;"></div>`;
        item.setAttribute('onclick', "$(this).next().fadeToggle('fast'); return false;");
        item.parentElement.style.position = 'relative'
        item.after(popover);
    });
}