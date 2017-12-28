import Vue from 'vue'
import Utils from '@/libs/utils'
import Url from '@/libs/url'
import $ from 'jquery'
import Promise from 'promise'


const Student = {
  hostIp: Url.host.mainHost,
  accessToken: '',

  /*判断是否登录超时*/
  checkTimeout() {
    if (!Utils.getItem('accessToken')) {
      return false;
    } else {
      this.accessToken = Utils.getItem('accessToken');
      return true;
    }
  },

  /*获取批次*/
  getMessageBatch(vue) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/hddx/interactMsg/getMessageBatch?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '0',
        method: 'get',
        params: {},
        name: 'getMessageBatch',
        related: '',
        chsName: '获取批次',
      }).then(res => {
        resolve(res);
      })
    })
  },

  /*获取老师列表*/
  getTeacher(vue) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/user/getTeacherListByUid?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '0',
        method: 'get',
        params: {},
        name: 'getTeacher',
        related: '',
        chsName: '获取老师列表',
      }).then(res => {
        resolve(res);
      })
    })
  },

  /*发送信息*/
  // pc, msgType, msg, ids
  sendMsg(vue, info) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/hddx/interactMsg' + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '0',
        method: 'post',
        params: JSON.stringify(info),
        name: 'sendMsg',
        related: 'sentInfo,getMessageBatch',
        chsName: '发送信息'
      }).then(res => {
        resolve(res)
      })
    })
  },

  /*已收信息*/
  receiveInfo(vue, currentPage) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/hddx/interactMsg/getInboxList?page.currentPage=' + currentPage + '&page.pageSize=10&access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '10',
        method: 'get',
        params: {},
        name: 'receiveInfo',
        related: '',
        chsName: '已收信息',
      }).then(res => {
        resolve(res);
      })
    })
  },

  /*更新已收信息*/
  updateReceiveInfo(vue, infoId) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/hddx/interactMsg/updateMessageFlag/' + infoId + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '0',
        method: 'put',
        params: {},
        name: 'updateReceiveInfo',
        related: 'receiveInfo',
        chsName: '更新已收信息',
      }).then(res => {
        resolve(res);
      })
    })
  },

  /*已发信息*/
  sentInfo(vue, currentPage) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/hddx/interactMsg/getOutboxList?page.currentPage=' + currentPage + '&page.pageSize=10&access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '10',
        method: 'get',
        params: {},
        name: 'sentInfo',
        related: '',
        chsName: '已发信息',
      }).then(res => {
        resolve(res);
      })
    })
  },

  /*已发信息详情*/
  getMessageSendStatus(vue, id) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/hddx/interactMsg/getMessageSendStatus/' + id + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '10',
        method: 'get',
        params: {},
        name: 'getMessageSendStatus',
        related: '',
        chsName: '已发信息详情',
      }).then(res => {
        resolve(res);
      })
    })
  },

  /*登录*/
  login(vue, user, index = 0) {
    const self = vue;
    return new Promise((resolve, reject) => {
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/login',
        type: 'json',
        reload: '0',
        method: 'post',
        params: JSON.stringify(user),
        name: 'login',
        related: '',
        chsName: '登录',
      }).then(res => {
        console.log(self.$utils.isArray(res.data));
        if (res.statusCode == '200' && !self.$utils.isArray(res.data)) {
          Utils.setItem('accessToken', res.data.accessToken);
          this.accessToken = res.data.accessToken;
        } else {
          // 家长用户 默认为第一个小孩
          Utils.setItem('accessToken', res.data[index]['accessToken']);
          this.accessToken = res.data[index]['accessToken'];
        }
        //调用原生login
        const isTest = Utils.isTest();
        if (!isTest) {
          const data = {
            username: user.username,
            password: user.password,
            userId: res.data.userId,
            accessToken: res.data.accessToken
          }
          wx.login(JSON.stringify(data))
        }
        resolve(res);
      }).catch(res => {
        reject(res.responseJSON.errorMsg)
      })
    })
  },

  /*获取学科*/
  getSubject(vue) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/course?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '2', //2分钟间隔
        method: 'get',
        params: {

        },
        name: 'getSubject',
        related: '',
        chsName: '获取学科'
      }).then(res => {
        resolve(res)
      })
    })
  },

  /*获取自己要做的作业列表*/
  getHomework(vue, courseId, status, type, score, currentPage, pageSize) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/homework?courseId=' + courseId + '&status=' + status + '&type=' + type + "&score=" + score + '&currentPage=' + currentPage + '&pageSize=' + pageSize + '&access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '2', //2分钟间隔
        method: 'get',
        params: {

        },
        name: 'getHomework',
        related: '',
        chsName: '获取自己要做的作业列表'
      }).then(res => {
        resolve(res)
      })
    })
  },

  /*学生根据作业id获取作业详情*/
  getHomeworkById(vue, homeworkId) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/homework/' + homeworkId + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '10',
        method: 'get',
        params: {

        },
        name: 'getHomeworkById',
        related: '',
        chsName: '学生根据作业id获取作业详情'
      }).then(res => {
        resolve(res)
      })
    })
  },

  /*学生根据作业id获取作业报告信息*/
  getHomeworkReport(vue, homeworkId) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/homework/' + homeworkId + '/report' + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '0',
        method: 'get',
        params: {

        },
        name: 'getHomeworkReport',
        related: '',
        chsName: '获取作业报告信息'
      }).then(res => {
        resolve(res)
      })
    })
  },

  /*学生提交作业*/
  submitHomework(vue, homeworkId, data) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/homework/' + homeworkId + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '0',
        method: 'post',
        params: JSON.stringify(data),
        name: 'submitHomework',
        related: 'getHomework,getWrong',
        chsName: '提交作业'
      }).then(res => {
        resolve(res)
      })
    })
  },

  /*学生批改作业(主观题)*/
  correct(vue, id, data) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/homework/' + id + '/check' + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '0',
        method: 'post',
        params: JSON.stringify(data),
        name: 'correct',
        related: 'getHomework,getWrong,getPaperReport,getGroupStudentHomework',
        chsName: '学生批改主观题作业'
      }).then(res => {
        resolve(res)
      })
    })
  },

  /*学生根据作业id获取作业内的题目*/
  getQuestions(vue, homeworkId) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/homework/' + homeworkId + '/question' + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '720',
        method: 'get',
        params: {

        },
        name: 'getQuestions',
        related: '',
        chsName: '获取作业内的题目'
      }).then(res => {
        resolve(res)
      }).catch(res => {
        reject(res.responseJSON.errorMsg);
      })
    })
  },

  /*学生根据作业id和题目id获取题目详情和自己作答内容*/
  getWorkAnswers(vue, homeworkId, questionId) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/homework/' + homeworkId + '/question/' + questionId + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '60',
        method: 'get',
        params: {

        },
        name: 'getWorkAnswers',
        related: '',
        chsName: '获取题目详情和自己作答内容'
      }).then(res => {
        resolve(res)
      })
    })
  },

  /*学生根据作业id获取作业成绩排行*/
  getHomeworkRanking(vue, homeworkId) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/homework/' + homeworkId + '/rank' + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '720',
        method: 'get',
        params: {

        },
        name: 'getHomeworkRanking',
        related: '',
        chsName: '获取作业成绩排行'
      }).then(res => {
        resolve(res)
      })
    })
  },

  /*学生获取考试试卷列表*/
  getTestPaper(vue) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/exam/' + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '720',
        method: 'get',
        params: {

        },
        name: 'getTestPaper',
        related: '',
        chsName: '获取考试试卷列表'
      }).then(res => {
        resolve(res)
      })
    })
  },

  /*学生根据试卷id获取试卷内的题目*/
  getPaperQuestions(vue, examId) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/exam/' + examId + '/question' + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '720',
        method: 'get',
        params: {

        },
        name: 'getPaperQuestions',
        related: '',
        chsName: '获取试卷内的题目'
      }).then(res => {
        resolve(res)
      })
    })
  },

  /*学生根据试卷id获取试卷报告信息*/
  getPaperReport(vue, paperkId) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/exam/' + paperkId + '/report' + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '720',
        method: 'get',
        params: {

        },
        name: 'getPaperReport',
        related: '',
        chsName: '获取试卷报告信息'
      }).then(res => {
        resolve(res)
      })
    })
  },

  /*学生根据试卷id获取试卷成绩排行*/
  getPaperRanking(vue, paperId) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/exam/' + paperId + '/rank' + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '720',
        method: 'get',
        params: {

        },
        name: 'getPaperRanking',
        related: '',
        chsName: '获取试卷成绩排行'
      }).then(res => {
        resolve(res)
      })
    })
  },

  /*学生根据试卷id和题目id获取题目详情和自己作答内容*/
  getPaperAnswers(vue, paperId, questionId) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/homework/' + paperId + '/question/' + questionId + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '0',
        method: 'get',
        params: {

        },
        name: 'getPaperAnswers',
        related: '',
        chsName: '获取题目详情和自己作答内容'
      }).then(res => {
        resolve(res)
      })
    })
  },

  /*学生获取自己的信息*/
  getMineInfo(vue) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/mine/' + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '60',
        method: 'get',
        params: {},
        name: 'getMineInfo',
        related: '',
        chsName: '获取自己的信息'
      }).then(res => {
        resolve(res)
      })
    })
  },

  /*学生提交自己的信息*/
  doMineInfo(vue, srcStudent) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/mine?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '1',
        method: 'post',
        params: JSON.stringify(srcStudent),
        name: 'doMineInfo',
        related: 'getMineInfo',
        chsName: '提交自己的信息'
      }).then(res => {
        resolve(res)
      })
    })
  },

  /*意见反馈*/
  suggBack(vue, message) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/feedback?' + 'message=' + message + '&access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '0',
        method: 'post',
        params: {},
        name: 'suggBack',
        related: 'getSuggBack',
        chsName: '意见反馈'
      }).then(res => {
        resolve(res)
      })
    })
  },

  /*获取意见反馈*/
  getSuggBack(vue, currentPage) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/feedback?' + 'currentPage=' + currentPage + '&pageSize=10' + '&access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '60',
        method: 'get',
        params: {},
        name: 'getSuggBack',
        related: '',
        chsName: '获取意见反馈'
      }).then(res => {
        resolve(res)
      })
    })
  },

  /*学生获取收藏的题*/
  getFavorite(vue, courseId, currentPage) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/question/course/' + courseId + '/collect' + '?currentPage=' + currentPage + '&pageSize=10' + '&access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '720',
        method: 'get',
        params: {},
        name: 'getFavorite',
        related: '',
        chsName: '获取收藏的题'
      }).then(res => {
        resolve(res)
      })
    })
  },

  /*收藏*/
  doFavorite(vue, questionId) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/question/' + questionId + '/collect' + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '0',
        method: 'post',
        params: questionId,
        name: 'doFavorite',
        related: 'getFavorite,getWorkAnswers',
        chsName: '收藏'
      }).then(res => {
        resolve(res)
      })
    })
  },

  /*学生获易错的题*/
  getOftenWrong(vue, courseId, chapterId, zsdId) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/question/course/' + courseId + '/oftenWrong' + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '60',
        method: 'get',
        params: {
          chapterId: chapterId,
          zsdId: zsdId
        },
        name: 'getOftenWrong',
        related: '',
        chsName: '获取易错的题'
      }).then(res => {
        resolve(res)
      })
    })
  },

  /*学生获取自己做错的题*/
  getWrong(vue, courseId, currentPage) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/question/course/' + courseId + '/wrong' + '?currentPage=' + currentPage + '&pageSize=10' + '&access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '60',
        method: 'get',
        params: {},
        name: 'getWrong',
        related: '',
        chsName: '获取自己做错的题'
      }).then(res => {
        resolve(res)
      })
    })
  },

  /*学生收藏易错的题*/
  doCollect(vue, questionId) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/question/' + questionId + '/collect' + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '0',
        method: 'post',
        params: {},
        name: 'doCollect',
        related: '',
        chsName: '收藏易错的题'
      }).then(res => {
        resolve(res)
      })
    })
  },

  /*名师导学筛选列表*/
  getMsdxList(vue, classId, courseId, date, currentPage, pageSize) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/msdx/article?classId=' + classId + '&courseId=' + courseId + '&date=' + date + '&currentPage=' + currentPage + '&pageSize' + pageSize + '&access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '7200',
        method: 'get',
        params: {},
        name: 'getMsdxList',
        related: '',
        chsName: '名师导学筛选列表'
      }).then(res => {
        resolve(res)
      })
    })
  },

  /*名师导学详情*/
  getMsdxDetail(vue, id) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/msdx/article/' + id + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '7200',
        method: 'get',
        params: {},
        name: 'getMsdxDetail',
        related: '',
        chsName: '名师导学详情'
      }).then(res => {
        resolve(res)
      })
    })
  },

  /*科目列表*/
  doCourse(vue, type) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/question/' + type + '/course' + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '7200',
        method: 'get',
        params: {},
        name: 'doCourse',
        related: '',
        chsName: '获取科目列表'
      }).then(res => {
        resolve(res)
      })
    })
  },

  /*获取本次作业的分组中的其他人的作业*/
  getGroupStudentHomework(vue, id) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/homework/' + id + '/group?studentHomeworkId=' + id + '&access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '0',
        method: 'get',
        params: {},
        name: 'getGroupStudentHomework',
        related: '',
        chsName: '获取本次作业的分组中的其他人的作业'
      }).then(res => {
        resolve(res)
      })
    })
  },

  /*获取要批阅同学作业的作答情况*/
  getStudentCheckInfo(vue, id) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/homework/group/check/' + id + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '1',
        method: 'get',
        params: {},
        name: 'getStudentCheckInfo',
        related: '',
        chsName: '获取要批阅同学作业的作答情况'
      }).then(res => {
        resolve(res)
      })
    })
  },
  /*学生互相批阅 提交*/
  studentCheck(vue, id, info) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/homework/group/check/' + id + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '0',
        method: 'post',
        params: JSON.stringify(info),
        name: 'studentCheck',
        related: 'getWrong,getGroupStudentHomework',
        chsName: '学生互相批阅'
      }).then(res => {
        resolve(res)
      })
    })
  },
  /*分组科目*/
  getCourse(vue) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/course?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '7200',
        method: 'get',
        params: {},
        name: 'getCourse',
        related: '',
        chsName: '分组科目'
      }).then(res => {
        resolve(res)
      })
    })
  },
  /*分组列表*/
  getGroupeList(vue, cid) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/group/course/' + cid + '/group' + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '0',
        method: 'get',
        params: {},
        name: 'getGroupeList',
        related: '',
        chsName: '分组列表'
      }).then(res => {
        resolve(res)
      })
    })
  },
  /*分组学生列表*/
  getGroupeStudent(vue, gid) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/group/' + gid + '/student' + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '0',
        method: 'get',
        params: {},
        name: 'getGroupeStudent',
        related: 'getRGroupeStu',
        chsName: '分组学生列表'
      }).then(res => {
        resolve(res)
      })
    })
  },
  /*获取自己所在分组*/
  getGroupeMine(vue, cid) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/group/course/' + cid + '/mine' + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '0',
        method: 'get',
        params: {},
        name: 'getGroupeMine',
        related: '',
        chsName: '获取自己所在分组'
      }).then(res => {
        resolve(res)
      })
    })
  },
  /*加入分组*/
  jionGroupe(vue, gid) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/group/' + gid + '/join' + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '0',
        method: 'post',
        params: {},
        name: 'jionGroupe',
        related: 'getGroupeMine,getGroupeStudent,getGroupeList,getGroupStudentHomework',
        chsName: '加入分组'
      }).then(res => {
        resolve(res)
      })
    })
  },
  /*退出分组*/
  exitGroupe(vue, gid) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/group/' + gid + '/exit' + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '0',
        method: 'delete',
        params: {},
        name: 'exitGroupe',
        related: 'getGroupeMine,getGroupeStudent,getGroupeList,getGroupStudentHomework',
        chsName: '退出分组'
      }).then(res => {
        resolve(res)
      })
    })
  },
  /*创建分组*/
  newGroupe(vue, cid, options) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/group/course/' + cid + '/createGroup' + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '0',
        method: 'post',
        params: JSON.stringify(options),
        name: 'newGroupe',
        related: 'getGroupeMine,getGroupeStudent,getGroupeList',
        chsName: '创建分组'
      }).then(res => {
        resolve(res)
      }).catch(res => {
        reject(res.responseJSON.errorMsg)
      })
    })
  },
  /*根据班级id获取班级列表*/
  getClass(vue, SID) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/class/' + SID + '/student' + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '7200',
        method: 'get',
        params: {

        },
        name: 'getClass',
        related: '',
        chsName: '获取所教的班级列表'
      }).then(res => {
        resolve(res)
      })
    })
  },
  /*学习报告*/
  getReport(vue, SID) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/mine/homework/report?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '7200',
        method: 'get',
        params: {

        },
        name: 'getReport',
        related: '',
        chsName: '学习报告'
      }).then(res => {
        resolve(res)
      })
    })
  },

  /*获取教育资讯列表*/
  getEduInfoList(vue, channelId, currentPage) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/cms/channel/' + channelId + '/content?currentPage' + currentPage + '&pageSize=10' + '&access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '7200',
        method: 'get',
        params: {

        },
        name: 'getEduInfoList',
        related: '',
        chsName: '获取教育资讯列表'
      }).then(res => {
        resolve(res)
      })
    })
  },

  /*教育资讯详细页面*/
  getEduInfoDetail(vue, id) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/cms/content/' + id + '?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '7200',
        method: 'get',
        params: {

        },
        name: 'getEduInfoDetail',
        related: '',
        chsName: '教育资讯详细页面'
      }).then(res => {
        resolve(res)
      })
    })
  },
  /*没有分组的学生*/
  getRGroupeStu(vue, gid) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/student/group/course/' + gid + '/nogroupstudent?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '7200',
        method: 'get',
        params: {

        },
        name: 'getRGroupeStu',
        related: '',
        chsName: '没有分组的学生'
      }).then(res => {
        resolve(res)
      })
    })
  },
  /*修改密码*/
  doPassword(vue, pswInfo) {
    const self = vue;
    return new Promise((resolve, reject) => {
      if (!this.checkTimeout()) {
        vue.$vux.toast.show({
          text: '登录超时',
          type: 'text',
          position: 'bottom'
        });
        return;
      }
      self.$ajax({
        vue: self,
        url: this.hostIp + '/password/modify?access_token=' + Utils.getItem('accessToken'),
        type: 'json',
        reload: '10',
        method: 'post',
        params: JSON.stringify(pswInfo),
        name: 'doPassword',
        related: '',
        chsName: '修改密码'
      }).then(res => {
        resolve(res)
      }).catch(res => {
        reject(res.responseJSON.errorMsg)
      })
    })
  },
}

Vue.prototype.$student = Student;
export default Student;
