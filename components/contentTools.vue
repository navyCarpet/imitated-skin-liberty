<template>
    <div class="content-tools" v-if="$store.state.page.viewName === 'wiki' || $store.state.page.viewName === 'notfound'">
        <div class="btn-group" role="group" aria-label="content-tools">
            <nuxt-link v-if="$store.state.page.data.starred"
                       :to="doc_action_link($store.state.page.data.document, 'member/unstar')" class="btn btn-secondary tools-btn">
                <span class="fa fa-star"></span>
                <span class="star-count">{{ $store.state.page.data.star_count }}</span>
            </nuxt-link>
            <nuxt-link v-else-if="$store.state.page.data.star_count >= 0"
                       :to="doc_action_link($store.state.page.data.document, 'member/star')" class="btn btn-secondary tools-btn">
                <span class="fa fa-star-o"></span>
                <span class="star-count">{{ $store.state.page.data.star_count }}</span>
            </nuxt-link>
            <nuxt-link :to="doc_action_link($store.state.page.data.document, 'backlink')" class="btn btn-secondary tools-btn">역링크</nuxt-link>
            <nuxt-link :to="doc_action_link($store.state.page.data.document, 'discuss')"  class="btn btn-secondary tools-btn" v-bind:class="{ 'btn-discuss-progress': $store.state.page.data.discuss_progress }">토론</nuxt-link>
            <nuxt-link :to="doc_action_link($store.state.page.data.document, 'edit')" class="btn btn-secondary tools-btn">편집</nuxt-link>
            <nuxt-link :to="doc_action_link($store.state.page.data.document, 'history')"  class="btn btn-secondary tools-btn">역사</nuxt-link>
            <nuxt-link v-if="$store.state.page.data.user"
                       :to="contribution_author_link($store.state.page.data.document.title)" class="btn btn-secondary tools-btn">기여</nuxt-link>
            <nuxt-link :to="doc_action_link($store.state.page.data.document, 'acl')"  class="btn btn-secondary tools-btn">ACL</nuxt-link>
            <template v-if="$store.state.page.data.menus">
                    <nuxt-link v-for="m in $store.state.page.data.menus" v-bind:key="m.to" :to="m.to" class="btn btn-secondary tools-btn" v-text="m.title" />
            </template>
        </div>
    </div>
    <div class="content-tools" v-else-if="$store.state.page.viewName === 'backlink'">
        <div class="btn-group" role="group" aria-label="content-tools">
            <nuxt-link :to="doc_action_link($store.state.page.data.document, 'history')"  class="btn btn-secondary tools-btn">역사</nuxt-link>
            <nuxt-link :to="doc_action_link($store.state.page.data.document, 'edit')" class="btn btn-secondary tools-btn">편집</nuxt-link>
            <template v-if="$store.state.page.data.menus">
                <nuxt-link v-for="m in $store.state.page.data.menus" v-bind:key="m.to" :to="m.to" class="btn btn-secondary tools-btn" v-text="m.title" />
            </template>
        </div>
    </div>
    <div class="content-tools" v-else-if="$store.state.page.viewName === 'edit' || $store.state.page.viewName === 'edit_edit_request'">
        <div class="btn-group" role="group" aria-label="content-tools">
            <nuxt-link :to="doc_action_link($store.state.page.data.document, 'backlink')" class="btn btn-secondary tools-btn">역링크</nuxt-link>
            <nuxt-link :to="doc_action_link($store.state.page.data.document, 'delete')" class="btn btn-danger tools-btn">삭제</nuxt-link>
            <nuxt-link :to="doc_action_link($store.state.page.data.document, 'move')"  class="btn btn-secondary tools-btn">이동</nuxt-link>
            <template v-if="$store.state.page.data.menus">
                <nuxt-link v-for="m in $store.state.page.data.menus" v-bind:key="m.to" :to="m.to" class="btn btn-secondary tools-btn" v-text="m.title" />
            </template>
        </div>
    </div>
    <div class="content-tools" v-else-if="$store.state.page.viewName === 'history'">
        <div class="btn-group" role="group" aria-label="content-tools">
             <nuxt-link :to="doc_action_link($store.state.page.data.document, 'edit')" class="btn btn-secondary tools-btn">편집</nuxt-link>
             <nuxt-link :to="doc_action_link($store.state.page.data.document, 'backlink')" class="btn btn-secondary tools-btn">역링크</nuxt-link>
             <template v-if="$store.state.page.data.menus">
                 <nuxt-link v-for="m in $store.state.page.data.menus" v-bind:key="m.to" :to="m.to" class="btn btn-secondary tools-btn" v-text="m.title" />
             </template>
        </div>
    </div>
    <div class="content-tools" v-else-if="$store.state.page.viewName === 'raw' || $store.state.page.viewName === 'diff'">
        <div class="btn-group" role="group" aria-label="content-tools">
            <nuxt-link :to="doc_action_link($store.state.page.data.document, 'history')"  class="btn btn-secondary tools-btn">역사</nuxt-link>
            <nuxt-link :to="doc_action_link($store.state.page.data.document, 'edit')" class="btn btn-secondary tools-btn">편집</nuxt-link>
            <nuxt-link :to="doc_action_link($store.state.page.data.document, 'backlink')" class="btn btn-secondary tools-btn">역링크</nuxt-link>
            <template v-if="$store.state.page.data.menus">
                <nuxt-link v-for="m in $store.state.page.data.menus" v-bind:key="m.to" :to="m.to" class="btn btn-secondary tools-btn" v-text="m.title" />
            </template>
        </div>
    </div>
    <div class="content-tools" v-else-if="$store.state.page.viewName === 'thread'">
        <div class="btn-group" role="group" aria-label="content-tools">
            <nuxt-link :to="doc_action_link($store.state.page.data.document, 'discuss')"  class="btn btn-secondary tools-btn">토론 목록</nuxt-link>
            <template v-if="$store.state.page.data.menus">
                <nuxt-link v-for="m in $store.state.page.data.menus" v-bind:key="m.to" :to="m.to" class="btn btn-secondary tools-btn" v-text="m.title" />
            </template>
        </div>
    </div>
</template>

