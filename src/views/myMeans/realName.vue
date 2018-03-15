<template>
    <div class="realName-wrap flex-column">
        <Head :userName="userName"/>
        <div class="realName w1000">
            <div class="main_box clearfix">
                <Menu :num='11'></Menu>
                <div class="main_info fr">
                    <h2 class="ybc_section_h2">实名认证</h2>
                    <div class="realName_p">
                        <p class="p1 mb_10" style="color:#ff0000;">根据国际法AML/KYC(反洗钱)等相关政策，当您从MMEX账户里提现或者进行大额充值时，您必须通过身份验证。</p><br>
                        <p class="p1">请上传身份证或护照照片</p>
                        <p class="p2 clearfix">
                            为了避免在您的账户身份证或护照验证的过程中出现延误，请确保您提交的文件符合以下要求 <br>
                            1.请提供身份证或护照照片，带有明确有效日期；<br>
                            2.住址证明图片要求清晰可见；<br>
                            3.证明图片要求高清（图片分辨率不低于72dpi)；<br>
                            4.仅支持JPG，JPEG和PNG格式的图片，最大图片为1M。<br>

                        </p>
                        <div class="clearfix imgCard">
                             <el-radio-group v-model="resource">
                                <div class="fl imgCardInfo">
                                    <el-radio label="身份证"></el-radio>
                                    <div class="imgBox clearfix">
                                        <div class="img fl"><img src="@/assets/img/img10.jpg" alt=""></div>
                                        <div class="img fr"><img src="@/assets/img/img11.jpg" alt=""></div>
                                    </div>
                                </div>
                                <div class="fl imgCardInfo">
                                    <el-radio label="护照"></el-radio>
                                    <div class="imgBox">
                                        <div class="img fl"><img src="@/assets/img/img12.jpg" alt=""></div>
                                        <div class="img fr"><img src="@/assets/img/img13.jpg" alt=""></div>
                                    </div>
                                </div>
                                <el-upload
                                    class="upload-demo"
                                    action="/file/upload"
                                    :on-change="handleChange"
                                    multiple
                                    :limit="1"
                                    :http-request="handleUpload"
                                    :file-list="fileList">
                                    <el-button size="small" type="primary" @click="handClick(1)">上传正面</el-button>
                                    <el-button size="small" type="primary" @click="handClick(2)">上传反面</el-button>
                                    <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                                    </el-upload>
                                
                            </el-radio-group>
                        </div>
                    </div>
                    
                    <div class="ybc_text"><input id="ybc_click" type="button" value="确认提交" class="ybc_next"></div>
                    <p style="color:#999;font-size:12px;margin-top:10px;">为了验证账户，请确认提交</p>
                    <br><br><br><br><br>
                </div>
            </div>
        </div>
        <Foot/>
    </div>
</template>
<script>
    import Head from '@/components/Head'
    import Foot from '@/components/Foot'
    import Menu from '@/components/Menu'
    export default {
        name: 'realName',
        components: {Head,Foot,Menu},
        data() {
            return {
                userName: '',
                input:'',
                resource:'',
                fileList:[]
            }
            
        },
        created(){
            let _this = this;
            this.$filter.auth(function (msg) {
                _this.userName = msg.name;
            });
        },
        methods: {
            // 浏览文件按钮
            handleChange(file) {
                if(file.status == "ready"){
                    this.fileNameLocal = file.name
                    this.phoneSize = 0
                    this.err = ""
                }
            },
            handClick() {
                // this.$refs.upload.clearFiles()
            },
            handleUpload(info) {
                let file = info.file
                if(!file) {
                    return this.$message({
                        type: 'warning',
                        message: "请重新添加文件"
                    })
                }
                const formData = new FormData();
                let myDate = new Date()
                // formData.append("file",file);
                file.accountId = 'security_verify';
                file.issue = myDate.getFullYear() +'-'+ (myDate.getMonth()+1);
                file.token = localStorage.jwt;
                debugger
                this.$api.upload(file,{
                    method:'post'
                }, res => {
                    console.log(res);
                    this.phoneSize = res.phoneSize || 0
                    this.filePath = res.filePath
                    this.fileName = res.fileName
                    this.uploadSize = res.uploadSize
                    if(!res.fileName){
                        this.err = "余额不足"
                    }else {
                        this.err = ""
                    }
                }, err => {
                    this.$refs.upload.clearFiles()
                    this.phoneSize = 0
                    this.filePath = ""
                    this.fileName = ""
                    this.err = err.errorMessage
                    this.$message({
                        type: 'error',
                        message: err.errorMessage
                    })
                })
            }
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .main_box{
        padding: 30px 0;
        .main_info{
            width: 810px;
            text-align: left;

        }
    }
    .el-checkbox{
        margin-left: 15px;
    }
    .realName{
        h2{
            font-size: 16px;
            line-height: 40px;
            color: #666;
        }
        .ybc_section_h2{
            height: 42px;
            border-bottom: 1px solid #ddd;
            margin-bottom: 36px;
        }
        .realName_p{
            .p1{font-size: 14px;color: #666;line-height: 22px;}
            .p2{
                font-size: 12px;color: #999;line-height: 22px;
                .download{
                    width: 70px;
                    height: 24px;
                    border: 1px solid #3e868f;
                    line-height: 24px;
                    text-align: center;
                    border-radius: 5px;
                    display: inline-block;
                    color: #3e868f;
                }
            }
            .imgCard{
                .imgCardInfo{
                    margin-top: 15px;
                    width: 405px;
                    margin-bottom: 20px;
                    .imgBox{
                        background: #faf9f6;
                        margin-left: 20px;
                        height: 175px;
                        width: 350px;
                        margin-top: 5px;
                        .img{
                            position: relative;
                            width: 160px;
                            height: 160px;
                            border: 1px dotted #ccc;
                            margin: 5px;
                            img{
                                position: absolute;
                                top:50%;
                                left:50%;
                                transform: translate(-50%,-50%);
                            }
                        }
                    }
                }
            }
        }
        .ybc_text {
            margin-top: 28px;
            .ybc_next {
                width: 204px;
                text-align: center;
                height: 40px;
                line-height: 40px;
                background: #3e868f;
                color: #fff;
                font-size: 16px;
                font-family: 'Microsoft Yahei';
                border: 0;
                padding: 0;
                cursor: pointer;
            }
        }
    }
</style>
