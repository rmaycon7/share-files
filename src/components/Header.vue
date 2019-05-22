<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="dark">
            <b-navbar-brand variant="primary" class="text-primary" :to="{name: 'home'}">Home</b-navbar-brand>

            <b-navbar-toggle variant="primary" target="nav-collapse">
                <!-- <span class="navbar-toggler-icon"></span> -->
            </b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="text-primary">
                    <b-nav-item class="text-primary" :to="{name: 'Downloads'}">
                        <span class="text-primary">Downloads</span>
                    </b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template slot="button-content">
                            <em class="text-primary">User</em>
                        </template>
                        <b-dropdown-item href="#" class="text-primary">Profile</b-dropdown-item>
                        <b-dropdown-item href="#" class="text-primary">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
