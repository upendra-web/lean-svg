<template>

    <!-- for showing reset and undo msg -->
    <div class="msg fixed bg-white p2 rounded">
        <slot></slot>
    </div>

</template>

<style>
.msg {
    left: 20px;
    bottom: 32px
}

@media screen and (max-width: 750px) {
    .msg {
        width: 100%;
        left: 0;
        bottom: 0;
        border-radius: 0;
        background-color: #886868;
        color: #fff
    }
}
</style>
