<template>
	<transition name="dialog-fade">
		<div
			class="x-dialog-mark"
			v-show="visible"
			@click.self="handleClose"
			:css="false"
		>
			<transition name="dialog-body-fade">
				<div
					class="x-dialog"
					:style="{
            width: width,
            top: top + '%',
          }"
					v-show="visible"
				>
					<div class="x-dialog-header">
						<slot name="dialogHeader">
              <span class="x-dialog-title">
                {{ title }}
              </span>
						</slot>
						
						<div class="x-dialog-header-btn" @click="handleClose">
							<i class="x-dialog-header-close iconfont icon-close"></i>
						</div>
					</div>
					<div class="x-dialog-body">
						<slot name="dialogBody">
							<span>这是信息</span>
						</slot>
					</div>
					<div class="x-dialog-footer" v-if="$slots.dialogFooter">
						<slot name="dialogFooter"></slot>
					</div>
				</div
				>
			</transition>
		</div>
	</transition>
</template>

<script>
export default {
	name: "XDialog",
	props: {
		title: {
			type: String,
			default: "提示",
		},
		width: {
			type: String,
			default: "500px",
		},
		top: {
			type: Number,
			default: 30,
		},
		visible: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		handleClose() {
			this.$emit("update:visible", false);
			this.$emit("close");
		},
	},
	watch: {
		visible(newValue) {
			if (newValue) {
				this.$emit("open");
			}
		},
	},
};
</script>

<style lang="scss">
.x-dialog-mark {
	position: fixed;
	z-index: 999;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.3);
	
	.x-dialog {
		border-radius: 3px;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		height: max-content;
		background-color: #fff;
		
		.x-dialog-header {
			padding: 20px 20px 10px;
			height: 54px;
			background-color: #fff;
			
			.x-dialog-title {
				font-size: 18px;
				color: #333;
			}
			
			.x-dialog-header-btn {
				position: absolute;
				height: 30px;
				width: 30px;
				background-color: #fff;
				right: 10px;
				top: 10px;
				text-align: center;
				line-height: 30px;
				cursor: pointer;
			}
		}
		
		.x-dialog-body {
			padding: 30px 20px;
		}
		
		.x-dialog-footer {
			padding: 10px 20px 20px;
			display: flex;
			justify-content: flex-end;
			
			button:nth-child(1) {
				margin: 0 10px 0 0;
			}
		}
	}
}

.dialog-fade-enter-active {
	animation: fade 0.2s ease-in;
}

.dialog-fade-leave-active {
	animation: fade 0.2s ease-in reverse;
}

@keyframes fade {
	0% {
		// transform: translateY(-40px);
		opacity: 0;
	}
	
	100% {
		// transform: translateY(0);
		opacity: 1;
	}
}

.dialog-body-fade-enter-active {
	animation: DialogBodyFade 0.2s ease-in;
}

.dialog-body-fade-leave-active {
	animation: DialogBodyFade 0.2s ease-in reverse;
}

@keyframes DialogBodyFade {
	0% {
		transform: translate(-50%, -40px);
		opacity: 0;
	}
	
	100% {
		transform: translate(-50%, 0px);
		opacity: 1;
	}
}
</style>
