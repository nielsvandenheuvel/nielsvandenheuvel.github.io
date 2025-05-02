<script lang="ts" setup>
</script>

<template>
    <div class="page-container row">
        <div class="image-container col-6" :style="{ backgroundImage: `url(images/Lion-cubs-1_8960.png)` }" v-tooltip="'Photo by me'">
        </div>
        <div class="form-container d-flex flex-column p-5 col-6">
            <div class="row">
                <div>
                    <a href="/" v-tooltip="'Go back'">
                        <font-awesome-icon :icon="['fas', 'arrow-left']" class="icon"/>
                    </a>
                </div>
                
            </div>
            <div class="row w-100">
                <form action="https://formspree.io/f/xovebqgv" method="POST">
                    <div class="form-group">
                        <label class="form-label">{{ $t('email') }}</label>
                        <input class="form-control" type="email" name="email" placeholder="Enter your email">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">{{ $t('description') }}</label>
                        <textarea class="form-control" name="message" placeholder="What do you want to say?"></textarea>
                    </div>
                    <input type="text" name="_gotcha" style="display:none" />
                    <button type="submit" class="btn">
                        Send message
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-container {
    position: relative;
    height: 100%;
    width: 100%;

    .image-container {
        background-size: cover;
        background-position-x: 25%;
    }

    .form-container {
        height: 100%;
        align-items: center;
        justify-content: center;

        a {
            position: relative;
            width: 40px;
            
            &:hover {
                background-color: inherit;
                cursor: pointer;
            }

            .icon {
                color: var(--color-text-vague);

                &:hover {
                    color: var(--color-accent);
                }
            }
        }

        form {
            padding: 100px;
            position: relative;
            width: 100%;
            color: var(--color-text);

            input, textarea {
                width: 100%;
                padding: 0.75rem 1rem;
                margin-bottom: 1.2rem;
                border: none;
                color: var(--color-text);
                border-bottom: 1px solid #ccc;
                border-radius: 4px;
                background: var(--color-bg);
                font-size: 0.9rem;
                transition: all 0.2s ease;

                &::placeholder {
                    color: var(--color-text-vague);
                }
            }

            button {
                background-color: var(--color-accent);
                color: var(--color-bg);
                width: 40%;
                border-radius: 1rem;

                &:hover {
                    background-color: var(--color-bg);
                    color: var(--color-accent);
                    border-color: var(--color-accent);
                }
            }
        }
    }
}
</style>