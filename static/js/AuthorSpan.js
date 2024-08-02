window.onload = function() {
    document.querySelectorAll("a[href^='/w/사용자:']").forEach(item => {
        const popover = document.createElement('div');
        popover.className = 'author-span';
        popover.style.display = 'none';
        popover.style.zIndex = 1000;
        popover.style.position = 'absolute';
        popover.style.top = '25px';
        popover.style.right = '0px';
        popover.innerHTML = `
            <div class="popper">
                <div style="padding: .25rem 1rem;">
                    <div style="font-size: .8rem;">사용자</div>
                    <div style="font-size: .95rem; font-weight: 600; line-height: 1; margin: 0 0 .3rem;">${item.textContent}</div>
                </div>
                <hr style="border: 0; border-top: 1px solid #d5d5d5; margin: .25rem 0;">
                <a href="${item.href}" class="popper_btn" role="button">사용자 문서</a>
                <hr style="border: 0; border-top: 1px solid #d5d5d5; margin: .25rem 0;">
                <a href="/contribution/author/${item.textContent}/document" class="popper_btn" role="button">문서 기여 내역</a>
                <a href="/contribution/author/${item.textContent}/discuss" class="popper_btn" role="button">토론 기여 내역</a>
                <div class="admin-tool">
                    <hr style="border: 0; border-top: 1px solid #d5d5d5; margin: .25rem 0;">
                    <a href="/BlockHistory?target=text&query=${item.textContent}" class="popper_btn" role="button">차단 내역 조회</a>
                    <hr style="border: 0; border-top: 1px solid #d5d5d5; margin: .25rem 0;">
                    <a class="popper_btn" style="background-color: #d64a58; color: #fff !important;" role="button">차단</a>
                </div>
            </div>`;
        item.setAttribute('onclick', `$('.author-span').hide(); $(this).next().fadeToggle('fast'); return false;`);
        item.parentElement.style.position = 'relative';
        item.after(popover);
    });

    let style = document.createElement('style')
    style.innerHTML = `
        .popper {
            background-color: #fff;
            border: 1px solid #d5d5d5;
            border-radius: 6px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .165), 0 4px 6px -4px rgba(0, 0, 0, .165);
            margin: .25rem 0 0;
            max-width: 15rem;
            min-width: 12rem;
            padding: .25rem 0;
            word-break: break-all;
            font-weight: normal;
            text-align: left;
        }

        .popper_btn {
            background-color: #fff;
            background-color: var(--article-background-color, #fff);
            border-radius: 4px;
            color: inherit !important;
            cursor: pointer;
            display: inline-flex;
            font-size: .9rem;
            line-height: 1.5;
            overflow: hidden;
            text-decoration: none !important;
            transition: background-color .1s ease-in, box-shadow .1s linear;
            white-space: nowrap;
            border: none !important;
            margin: .125rem .25rem;
            padding: .2rem .75rem !important;
            display: block;
        }

        .popper_btn:hover {
            background-color: #f2f2f2;
        }

        .admin-tool {
            display: none;
        }
    `;
    document.body.appendChild(style);
}