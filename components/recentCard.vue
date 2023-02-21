<template>
    <div class="live-recent-content">
        <ul class="live-recent-list" id="live-recent-list">
            <template v-if="recent.length === 0">
                <li><span class="recent-item">&nbsp;</span></li>
                <li><span class="recent-item">&nbsp;</span></li>
                <li><span class="recent-item">&nbsp;</span></li>
                <li><span class="recent-item">&nbsp;</span></li>
                <li><span class="recent-item">&nbsp;</span></li>
                <li><span class="recent-item">&nbsp;</span></li>
                <li><span class="recent-item">&nbsp;</span></li>
                <li><span class="recent-item">&nbsp;</span></li>
                <li><span class="recent-item">&nbsp;</span></li>
                <li><span class="recent-item">&nbsp;</span></li>
            </template>
            <template v-else>
                <li v-for="(r,i) in recent" v-bind:key="i"><nuxt-link class="recent-item" v-bind:key="r.document" :to="doc_action_link(r.document, 'w')">[<local-date :date="r.date" format="H:i:s" />] {{ r.document}}</nuxt-link></li>
            </template>
        </ul>
    </div>
</template>

<script>
import RecentCardMixin from '~/mixins/recentCard';
export default {
    mixins: [RecentCardMixin]
}
</script>
