webpackJsonp([7],{

/***/ 1136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Progress__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Progress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Progress__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * Абстрактный компонент с индикатором прогресса
 *
 * @module Progress
 *
 * Created by Evgeniy Malyarov on 24.03.2018.
 */var Progress=function(_Component){_inherits(Progress,_Component);function Progress(props,context){_classCallCheck(this,Progress);var _this=_possibleConstructorReturn(this,(Progress.__proto__||Object.getPrototypeOf(Progress)).call(this,props,context));_this.on_index=function(info){_this.setState({step:'\u041F\u0435\u0440\u0435\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C \u0438\u043D\u0434\u0435\u043A\u0441 '+info.index+'...'});};_this.progress=function(){var completed=_this.state.completed;if(completed>100){_this.setState({completed:0,buffer:10});}else{var diff=Math.random()*5;var diff2=Math.random()*5;_this.setState({completed:completed+diff,buffer:completed+diff+diff2});}};_this.state={error:'',step:'Подготовка данных...',docs:null,prods:null,completed:0,buffer:10};_this.timer=0;return _this;}_createClass(Progress,[{key:'componentDidMount',value:function componentDidMount(){var _$p$adapters$pouch=$p.adapters.pouch,local=_$p$adapters$pouch.local,remote=_$p$adapters$pouch.remote,authorized=_$p$adapters$pouch.authorized;if(local.doc===remote.doc){this.setState({error:'\u0412 \u0440\u0435\u0436\u0438\u043C\u0435 \'direct\', \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F'});return;}if(!authorized){this.setState({error:'\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435'});return;}this.timer=setInterval(this.progress,700);this.init();}},{key:'componentWillUnmount',value:function componentWillUnmount(){this.timer&&clearInterval(this.timer);}/**
   * Синхронизирует массив заказов
   * @param refs
   */},{key:'sync_orders',value:function sync_orders(docs,keys){var _this2=this;var _$p$adapters$pouch2=$p.adapters.pouch,local=_$p$adapters$pouch2.local,remote=_$p$adapters$pouch2.remote;this.setState({step:'Сравниваем версии заказов local и remote...',completed:0,buffer:10});return remote.doc.allDocs({keys:keys}).then(function(_ref){var rows=_ref.rows;var diff=[];var _loop=function _loop(rdoc){if(rdoc.value){if(!docs.some(function(doc){return doc.key&&doc.value?doc.id===rdoc.id&&doc.value.rev===rdoc.value.rev:doc._id===rdoc.id&&doc._rev===rdoc.value.rev;})){diff.push(rdoc.id);}}else{// TODO: обработать пометку удаления
}};var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=rows[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var rdoc=_step.value;_loop(rdoc);}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}return{ldoc:keys,diff:diff};}).then(function(_ref2){var ldoc=_ref2.ldoc,diff=_ref2.diff;if(diff.length){_this2.setState({step:'Получаем объекты заказов с сервера...',completed:0,buffer:10});return remote.doc.allDocs({include_docs:true,attachments:true,keys:diff}).then(function(_ref3){var rows=_ref3.rows;_this2.setState({step:'Записываем изменённые заказы...'});return local.doc.bulkDocs(rows.filter(function(v){return v.doc;}).map(function(_ref4){var doc=_ref4.doc;return doc;}),{new_edits:false});}).then(function(){_this2.setState({step:'Получаем объекты заказов из базы браузера...',completed:0,buffer:10});return local.doc.allDocs({include_docs:true,keys:ldoc});});}else{_this2.setState({step:'Получаем объекты заказов из базы браузера...',completed:0,buffer:10});return local.doc.allDocs({include_docs:true,keys:ldoc});}});}/**
   * Синхронизирует продукции
   * @param refs
   */},{key:'sync_products',value:function sync_products(docs){var _this3=this;var _$p$adapters$pouch3=$p.adapters.pouch,local=_$p$adapters$pouch3.local,remote=_$p$adapters$pouch3.remote;var keys=[];var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=docs[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var _ref5=_step2.value;var production=_ref5.production;if(production){var _iteratorNormalCompletion5=true;var _didIteratorError5=false;var _iteratorError5=undefined;try{for(var _iterator5=production[Symbol.iterator](),_step5;!(_iteratorNormalCompletion5=(_step5=_iterator5.next()).done);_iteratorNormalCompletion5=true){var row=_step5.value;if(row.characteristic&&row.characteristic!==$p.utils.blank.guid){keys.push('cat.characteristics|'+row.characteristic);}}}catch(err){_didIteratorError5=true;_iteratorError5=err;}finally{try{if(!_iteratorNormalCompletion5&&_iterator5.return){_iterator5.return();}}finally{if(_didIteratorError5){throw _iteratorError5;}}}}}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return){_iterator2.return();}}finally{if(_didIteratorError2){throw _iteratorError2;}}}this.setState({step:'Сравниваем версии характеристик продукций...',completed:0,buffer:10});return Promise.all([local.doc.allDocs({keys:keys}),remote.doc.allDocs({keys:keys})]).then(function(res){var ldoc=res[0].rows;var diff=[];var _loop2=function _loop2(rdoc){if(!rdoc.value){// TODO: обработать удаление
return'continue';}if(!ldoc.some(function(doc){return!doc.error&&doc.id===rdoc.id&&doc.value.rev===rdoc.value.rev;})){diff.push(rdoc.id);}};var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=res[1].rows[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=true){var rdoc=_step3.value;var _ret2=_loop2(rdoc);if(_ret2==='continue')continue;}// формируем массив пачек по 100 элементов
}catch(err){_didIteratorError3=true;_iteratorError3=err;}finally{try{if(!_iteratorNormalCompletion3&&_iterator3.return){_iterator3.return();}}finally{if(_didIteratorError3){throw _iteratorError3;}}}var difs={length:diff.length,rows:[]};_this3.setState({step:'\u041D\u0430\u0439\u0434\u0435\u043D\u043E '+difs.length+' \u043E\u0442\u043B\u0438\u0447\u0438\u0439 \u0432 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0430\u0445',completed:0,buffer:10});var rows=[];var _iteratorNormalCompletion4=true;var _didIteratorError4=false;var _iteratorError4=undefined;try{for(var _iterator4=diff[Symbol.iterator](),_step4;!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=true){var dif=_step4.value;if(rows.length<100){rows.push(dif);}else{difs.rows.push(rows);rows=[dif];}}}catch(err){_didIteratorError4=true;_iteratorError4=err;}finally{try{if(!_iteratorNormalCompletion4&&_iterator4.return){_iterator4.return();}}finally{if(_didIteratorError4){throw _iteratorError4;}}}if(rows.length){difs.rows.push(rows);}return difs;}).then(function(difs){// редуцируем
return difs.rows.reduce(function(sum,keys,index){return sum.then(function(){_this3.setState({step:'\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E '+index*100+' \u0438\u0437 '+difs.length+' \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0439'});return remote.doc.allDocs({include_docs:true,keys:keys}).then(function(_ref6){var rows=_ref6.rows;// const deleted = rows.filter((v) => !v.doc);
return local.doc.bulkDocs(rows.filter(function(v){return v.doc&&!v.doc._attachments;}).map(function(v){return v.doc;}),{new_edits:false});});});},Promise.resolve());});}/**
   * Перестраивает индексы
   */},{key:'rebuild_indexes',value:function rebuild_indexes(){var _this4=this;this.setState({step:'\u041F\u0435\u0440\u0435\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C \u0438\u043D\u0434\u0435\u043A\u0441\u044B...',completed:0,buffer:10});$p.adapters.pouch.on('rebuild_indexes',this.on_index);return $p.adapters.pouch.rebuild_indexes('doc').then(function(){$p.adapters.pouch.off('rebuild_indexes',_this4.on_index);if(_this4.timer){clearInterval(_this4.timer);_this4.timer=0;}_this4.setState({error:'Обработка завершена'});setTimeout(function(){_this4.props.handleCancel();},2000);});}},{key:'render',value:function render(){var _state=this.state,error=_state.error,step=_state.step,completed=_state.completed,buffer=_state.buffer;if(error){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,error);}return[__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{key:'progress',style:{flexGrow:1}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Progress__["LinearProgress"],{color:'secondary',variant:'buffer',value:completed,valueBuffer:buffer}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{key:'text'},step)];}}]);return Progress;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);Progress.propTypes={handleCancel:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired};/* harmony default export */ __webpack_exports__["a"] = (Progress);

/***/ }),

/***/ 1170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UtilsRouter__ = __webpack_require__(1171);
/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__UtilsRouter__["a" /* default */]);

/***/ }),

/***/ 1171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Button__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_metadata_react_App_Dialog__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connect__ = __webpack_require__(1172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Download__ = __webpack_require__(1174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Inbox__ = __webpack_require__(1175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Share__ = __webpack_require__(1176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Templates__ = __webpack_require__(1182);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * ### Утилиты автономного режима
 * каркас компонента - визуальная глупая часть
 *
 */var UtilsRouter=function(_Component){_inherits(UtilsRouter,_Component);function UtilsRouter(props,context){_classCallCheck(this,UtilsRouter);var _this=_possibleConstructorReturn(this,(UtilsRouter.__proto__||Object.getPrototypeOf(UtilsRouter)).call(this,props,context));_this.handleOk=function(){_this.handleCalck().then(_this.handleCancel);};var handleCancel=props.handleCancel,handleCalck=props.handleCalck;_this.handleCancel=handleCancel.bind(_this);_this.handleCalck=handleCalck.bind(_this);_this.state={info:null,err:null,title:'Утилиты автономного режима',Component:null};return _this;}_createClass(UtilsRouter,[{key:'componentDidMount',value:function componentDidMount(){var _this2=this;$p.adapters.pouch.remote.doc.info().then(function(info){_this2.setState({info:info},function(){switch(_this2.props.dialog.cmd){case'btn_templates':_this2.setState({Component:__WEBPACK_IMPORTED_MODULE_8__Templates__["a" /* default */],title:'Загрузка шаблонов'});break;case'btn_download':_this2.setState({Component:__WEBPACK_IMPORTED_MODULE_5__Download__["a" /* default */],title:'Обновление заказов из облака'});break;case'btn_share':_this2.setState({Component:__WEBPACK_IMPORTED_MODULE_7__Share__["a" /* default */],title:'Отправка заказа сотруднику'});break;case'btn_inbox':_this2.setState({Component:__WEBPACK_IMPORTED_MODULE_6__Inbox__["a" /* default */],title:'Входящие заказы'});break;}});}).catch(function(err){_this2.setState({error:err.message||'Ошибка доступа к базе doc'});});}},{key:'renderContent',value:function renderContent(){var _state=this.state,err=_state.err,info=_state.info,Component=_state.Component;if(err){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,'\u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D');}if(!info){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,'\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C...');}if(Component){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component,Object.assign({},this.props,{handleCancel:this.handleCancel}));}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,'\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445...');}},{key:'render',value:function render(){var handleCancel=this.handleCancel,classes=this.props.classes,title=this.state.title;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_metadata_react_App_Dialog__["a" /* default */],{open:true,initFullScreen:true,classes:{paper:classes.paper},title:title,onClose:handleCancel,actions:[__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Button___default.a,{key:'cancel',onClick:handleCancel,color:'primary'},'\u0417\u0430\u043A\u0440\u044B\u0442\u044C')]},this.renderContent());}}]);return UtilsRouter;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);UtilsRouter.propTypes={classes:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,dialog:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,handlers:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,handleCalck:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,handleCancel:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4__connect__["a" /* default */])(UtilsRouter));

/***/ }),

/***/ 1172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__(1173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_compose__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose_compose__);
/**
 * ### Карточка покупателя
 * обработчики событий и модификаторы данных
 *
 * Created by Evgeniy Malyarov on 13.11.2017.
 */function mapStateToProps(state,props){return{handleCalck:function handleCalck(){//dp.calc_order.production.sync_grid(props.dialog.wnd.elmnts.grids.production);
return Promise.resolve();},handleCancel:function handleCancel(){props.handlers.handleIfaceState({component:'CalcOrderList',name:'dialog',value:null});if(props.dialog.cmd==='btn_share'){props.handlers.handleIfaceState({component:'DataObjPage',name:'dialog',value:null});}},handleOpen:function handleOpen(ref){props.handlers.handleNavigate('/doc.calc_order/'+ref.replace('doc.calc_order|',''));}};}// function mapDispatchToProps(dispatch) {
//   return {};
// }
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_recompose_compose___default()(__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* default */],Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps/*, mapDispatchToProps */)));

/***/ }),

/***/ 1173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_material_ui_styles__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_material_ui_styles__);
/**
 * ### Карточка покупателя
 * стили оформления
 *
 * Created by Evgeniy Malyarov on 14.03.2018.
 */var styles=function styles(theme){return{paper:{minWidth:880,maxHeight:'calc(100vh - 80px)'},entered:{minHeight:120},secondary:{marginTop:-theme.spacing.unit*1.5},groupTitle:{fontWeight:'bold'},listitem:{paddingTop:theme.spacing.unit,paddingBottom:theme.spacing.unit}};};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_material_ui_styles__["withStyles"])(styles));

/***/ }),

/***/ 1174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Progress__ = __webpack_require__(1136);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * Обновляет заказы и продукции из облака
 *
 * @module Download
 *
 * Created by Evgeniy Malyarov on 24.03.2018.
 */var Download=function(_Progress){_inherits(Download,_Progress);function Download(){_classCallCheck(this,Download);return _possibleConstructorReturn(this,(Download.__proto__||Object.getPrototypeOf(Download)).apply(this,arguments));}_createClass(Download,[{key:'init',value:function init(){var _this2=this;var local=$p.adapters.pouch.local;var moment=$p.utils.moment;this.setState({step:'Получаем массив заказов текущей базы...'});local.doc.find({selector:{class_name:'doc.calc_order',date:{$gte:moment().subtract(3,'months').format('YYYY-MM-DD'),$lte:moment().add(1,'months').format('YYYY-MM-DD')}},fields:['_id','_rev','state'],limit:10000}).then(function(_ref){var docs=_ref.docs;var keys=docs.filter(function(v){return v.state!=='template';}).map(function(v){return v._id;});return _this2.sync_orders(docs,keys);}).then(function(_ref2){var rows=_ref2.rows;var docs=rows.filter(function(v){return v.doc;}).map(function(v){return v.doc;});return _this2.sync_products(docs);}).then(function(){return _this2.rebuild_indexes();}).catch(function(err){_this2.setState({error:err.message||'Ошибка синхронизации заказов'});});}}]);return Download;}(__WEBPACK_IMPORTED_MODULE_1__Progress__["a" /* default */]);Download.propTypes={dialog:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object.isRequired,handleCancel:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired};/* harmony default export */ __webpack_exports__["a"] = (Download);

/***/ }),

/***/ 1175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Progress__ = __webpack_require__(1136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Progress__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Progress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Progress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_List__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_List__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * Заказы, отправленные сотруднику с push автономным режимом работы
 *
 * @module Inbox
 *
 * Created by Evgeniy Malyarov on 24.03.2018.
 */var Inbox=function(_Progress){_inherits(Inbox,_Progress);function Inbox(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Inbox);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Inbox.__proto__||Object.getPrototypeOf(Inbox)).call.apply(_ref,[this].concat(args))),_this),_this.handleOpen=function(value){return function(){_this.props.handleCancel();_this.props.handleOpen(value);};},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Inbox,[{key:'init',value:function init(){var _this2=this;var _$p$adapters$pouch=$p.adapters.pouch,local=_$p$adapters$pouch.local,remote=_$p$adapters$pouch.remote;// получим local-документ текущего пользователя
this.setState({step:'Получаем inbox-документ текущего пользователя...'});remote.doc.get('_local/inbox_'+$p.current_user.ref).then(function(doc){_this2.setState({step:'Сравниваем версии входящих заказов...'});var docs=[];for(var ref in doc){if(ref[0]=='_'){continue;}docs.push({ref:ref});}var keys=docs.map(function(v){return'doc.calc_order|'+v.ref;});return local.doc.allDocs({keys:keys}).then(function(_ref2){var rows=_ref2.rows;return _this2.sync_orders(rows,keys);});}).then(function(_ref3){var rows=_ref3.rows;var docs=rows.filter(function(v){return v.doc;}).map(function(v){return v.doc;});return _this2.sync_products(docs).then(function(){docs.sort(function(a,b){var ta=a.timestamp?a.timestamp.moment:a.date;var tb=b.timestamp?b.timestamp.moment:b.date;if(ta>tb){return-1;}if(tb>ta){return 1;}return 0;});if(_this2.timer){clearInterval(_this2.timer);_this2.timer=0;}_this2.setState({docs:docs});});}).catch(function(err){_this2.setState({error:err.message||'\u041E\u0448\u0438\u0431\u043A\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A _local/inbox_'});});}},{key:'render',value:function render(){var _this3=this;var _state=this.state,error=_state.error,step=_state.step,docs=_state.docs,completed=_state.completed,buffer=_state.buffer;var moment=$p.utils.moment;if(error){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,error);}if(docs){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_List___default.a,{key:'list'},docs.map(function(value){var _id=value._id,number_doc=value.number_doc,date=value.date,posted=value.posted,timestamp=value.timestamp,partner=value.partner,client_of_dealer=value.client_of_dealer,manager=value.manager;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItem"],{key:_id,button:true,onDoubleClick:_this3.handleOpen(_id)},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItemText"],{primary:'\u2116'+(number_doc||'б/н')+' \u043E\u0442 '+moment(date).format(moment._masks.ldt)+' ('+(posted?'':'не ')+'\u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D), '+(client_of_dealer||$p.cat.partners.get(partner).name||'Клиент не указан'),secondary:''+($p.cat.users.get(manager).name||timestamp&&timestamp.user)}));}));}return[__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{key:'progress',style:{flexGrow:1}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Progress__["LinearProgress"],{color:'secondary',variant:'buffer',value:completed,valueBuffer:buffer}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br',null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{key:'text'},step)];}}]);return Inbox;}(__WEBPACK_IMPORTED_MODULE_1__Progress__["a" /* default */]);Inbox.propTypes={dialog:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired};/* harmony default export */ __webpack_exports__["a"] = (Inbox);

/***/ }),

/***/ 1176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_List__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Checkbox__ = __webpack_require__(1177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Checkbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Typography__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Typography__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * Отправляет ссылку на заказ некому сотруднику
 *
 * @module Share
 *
 * Created by Evgeniy Malyarov on 24.03.2018.
 */var Share=function(_Component){_inherits(Share,_Component);function Share(props,context){_classCallCheck(this,Share);var _this=_possibleConstructorReturn(this,(Share.__proto__||Object.getPrototypeOf(Share)).call(this,props,context));_initialiseProps.call(_this);_this.state={error:'',doc:null,users:null};var ref=_this.props.dialog.ref;var _$p=$p,current_user=_$p.current_user;if($p.utils.is_empty_guid(ref)){_this.state.error='При открытии из формы списка, укажите текущую строку заказа, который собираетесь отправить сотруднику';}else if(!current_user||current_user.branch.empty()){_this.state.error='Нельзя поделиться заказом центральной базы - только из базы отдела';}return _this;}_createClass(Share,[{key:'componentDidMount',value:function componentDidMount(){var _this2=this;var error=this.state.error,dialog=this.props.dialog;var users=new Map();if(!error){var doc=$p.doc.calc_order.get(dialog.ref);var branch=$p.current_user.branch;(doc.is_new()?doc.load():Promise.resolve()).then(function(){$p.cat.users.find_rows({branch:branch,push_only:true},function(o){return users.set(o,{});});if(users.size<1){_this2.setState({error:'\u041D\u0435\u043A\u043E\u043C\u0443 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C, \u0432 \u0444\u0438\u043B\u0438\u0430\u043B\u0435 "'+branch.name+'", \u043D\u0435\u0442 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u0441 push-\u0440\u0435\u043F\u043B\u0438\u043A\u0430\u0446\u0438\u0435\u0439'});}else{// получим local-документы пользователей
$p.adapters.pouch.remote.doc.allDocs({include_docs:true,keys:Array.from(users.keys()).map(function(v){return'_local/inbox_'+v.ref;})}).then(function(_ref){var rows=_ref.rows;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=rows[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var row=_step.value;var map=users.get($p.cat.users.get(row.key.replace('_local/inbox_','')));if(row.error){map._id=row.key;}else{Object.assign(map,row.doc);}}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}_this2.setState({doc:doc,users:users});}).catch(function(err){_this2.setState({error:err.message||'\u041E\u0448\u0438\u0431\u043A\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A _local/inbox_'});});}});}}},{key:'render',value:function render(){var _this3=this;var _state=this.state,error=_state.error,doc=_state.doc,users=_state.users;if(error){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,error);}if(!doc){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,'\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445...');}return[__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Typography___default.a,{key:'doc',variant:'subheading',gutterBottom:true},doc.presentation),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_List___default.a,{key:'list'},Array.from(users.keys()).map(function(value){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_List__["ListItem"],{key:value.ref,button:true,onClick:_this3.handleToggle(value)},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Checkbox___default.a,{checked:!!users.get(value)[doc.ref],tabIndex:-1,disableRipple:true}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_List__["ListItemText"],{primary:value.name}));}))];}}]);return Share;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);var _initialiseProps=function _initialiseProps(){var _this4=this;this.handleToggle=function(value){return function(){var map=_this4.state.users.get(value);var ref=_this4.state.doc.ref;var doc=$p.adapters.pouch.remote.doc;if(map.hasOwnProperty(ref)){delete map[ref];}else{map[ref]=true;}// результат сразу записываем
doc.get(map._id).catch(function(err){if(err.status!=404){throw err;}return map;}).then(function(rdoc){if(rdoc!==map){if(rdoc.hasOwnProperty(ref)){delete rdoc[ref];}else{rdoc[ref]=true;}}return doc.put(rdoc);}).then(function(){_this4.forceUpdate();}).catch(function(err){_this4.setState({error:err.message||'\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u043F\u0438\u0441\u0430\u0442\u044C '+map._id});});};};};Share.propTypes={dialog:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired};/* harmony default export */ __webpack_exports__["a"] = (Share);

/***/ }),

/***/ 1177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Checkbox = __webpack_require__(1178);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Checkbox).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 1178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__(2);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(11);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _SwitchBase = __webpack_require__(245);

var _SwitchBase2 = _interopRequireDefault(_SwitchBase);

var _CheckBoxOutlineBlank = __webpack_require__(1179);

var _CheckBoxOutlineBlank2 = _interopRequireDefault(_CheckBoxOutlineBlank);

var _CheckBox = __webpack_require__(1180);

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _IndeterminateCheckBox = __webpack_require__(1181);

var _IndeterminateCheckBox2 = _interopRequireDefault(_IndeterminateCheckBox);

var _helpers = __webpack_require__(21);

var _withStyles = __webpack_require__(8);

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    default: {
      color: theme.palette.text.secondary
    },
    checked: {},
    checkedPrimary: {
      color: theme.palette.primary.main
    },
    checkedSecondary: {
      color: theme.palette.secondary.main
    },
    disabled: {
      color: theme.palette.action.disabled
    }
  };
};

function Checkbox(props) {
  var checkedIcon = props.checkedIcon,
      classes = props.classes,
      color = props.color,
      icon = props.icon,
      indeterminate = props.indeterminate,
      indeterminateIcon = props.indeterminateIcon,
      other = (0, _objectWithoutProperties3.default)(props, ['checkedIcon', 'classes', 'color', 'icon', 'indeterminate', 'indeterminateIcon']);

  var checkedClass = (0, _classnames2.default)(classes.checked, (0, _defineProperty3.default)({}, classes['checked' + (0, _helpers.capitalize)(color)], color !== 'default'));

  return _react2.default.createElement(_SwitchBase2.default, (0, _extends3.default)({
    checkedIcon: indeterminate ? indeterminateIcon : checkedIcon,
    classes: {
      default: classes.default,
      checked: checkedClass,
      disabled: classes.disabled
    },
    icon: indeterminate ? indeterminateIcon : icon
  }, other));
}

Checkbox.propTypes =  false ? {
  /**
   * If `true`, the component is checked.
   */
  checked: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes2.default.oneOf(['primary', 'secondary', 'default']),
  /**
   * If `true`, the switch will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes2.default.bool,
  /**
   * The icon to display when the component is unchecked.
   */
  icon: _propTypes2.default.node,
  /**
   * The id of the `input` element.
   */
  id: _propTypes2.default.string,
  /**
   * If `true`, the component appears indeterminate.
   */
  indeterminate: _propTypes2.default.bool,
  /**
   * The icon to display when the component is indeterminate.
   */
  indeterminateIcon: _propTypes2.default.node,
  /**
   * Properties applied to the `input` element.
   */
  inputProps: _propTypes2.default.object,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes2.default.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.checked`.
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: _propTypes2.default.func,
  /**
   * The input component property `type`.
   */
  type: _propTypes2.default.string,
  /**
   * The value of the component.
   */
  value: _propTypes2.default.string
} : {};

Checkbox.defaultProps = {
  checkedIcon: _react2.default.createElement(_CheckBox2.default, null),
  color: 'secondary',
  icon: _react2.default.createElement(_CheckBoxOutlineBlank2.default, null),
  indeterminate: false,
  indeterminateIcon: _react2.default.createElement(_IndeterminateCheckBox2.default, null)
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiCheckbox' })(Checkbox);

/***/ }),

/***/ 1179:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(55);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(56);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore - internal component.
 */
var _ref = _react2.default.createElement('path', { d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' });

var CheckBoxOutlineBlank = function CheckBoxOutlineBlank(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _ref
  );
};
CheckBoxOutlineBlank = (0, _pure2.default)(CheckBoxOutlineBlank);
CheckBoxOutlineBlank.muiName = 'SvgIcon';

exports.default = CheckBoxOutlineBlank;

/***/ }),

/***/ 1180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(55);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(56);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore - internal component.
 */
var _ref = _react2.default.createElement('path', { d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' });

var CheckBox = function CheckBox(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _ref
  );
};
CheckBox = (0, _pure2.default)(CheckBox);
CheckBox.muiName = 'SvgIcon';

exports.default = CheckBox;

/***/ }),

/***/ 1181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(55);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(56);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore - internal component.
 */
var _ref = _react2.default.createElement('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z' });

var IndeterminateCheckBox = function IndeterminateCheckBox(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _ref
  );
};
IndeterminateCheckBox = (0, _pure2.default)(IndeterminateCheckBox);
IndeterminateCheckBox.muiName = 'SvgIcon';

exports.default = IndeterminateCheckBox;

/***/ }),

/***/ 1182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Progress__ = __webpack_require__(1136);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * Загружает шаблоны из облака
 * Имеет смысл только для  push автономного режима работы
 *
 * @module Templates
 *
 * Created by Evgeniy Malyarov on 24.03.2018.
 */var Templates=function(_Progress){_inherits(Templates,_Progress);function Templates(){_classCallCheck(this,Templates);return _possibleConstructorReturn(this,(Templates.__proto__||Object.getPrototypeOf(Templates)).apply(this,arguments));}_createClass(Templates,[{key:'init',value:function init(){var _this2=this;// получаем локальные и серверные шаблоны
var _$p$adapters$pouch=$p.adapters.pouch,local=_$p$adapters$pouch.local,remote=_$p$adapters$pouch.remote,authorized=_$p$adapters$pouch.authorized;this.setState({step:'Синхронизируем базовые справочники...'});return new Promise(function(resolve,reject){var sync=local.doc.replicate.from(remote.doc,{batch_size:200,batches_limit:6,retry:true,filter:'auth/push_only',query_params:{user:authorized}}).on('error',function(err){reject(err);}).on('complete',function(){sync.cancel();sync.removeAllListeners();resolve();});}).then(function(){_this2.setState({step:'Получаем документы шаблонов из локальной базы...',completed:0,buffer:10});return local.doc.find({selector:{department:$p.utils.blank.guid,state:'template'},fields:['_id','production'],limit:1000});}).then(function(_ref){var docs=_ref.docs;return _this2.sync_products(docs);}).then(function(){return _this2.rebuild_indexes();}).catch(function(err){_this2.setState({error:err.message||'Ошибка синхронизации шаблонов'});});}}]);return Templates;}(__WEBPACK_IMPORTED_MODULE_1__Progress__["a" /* default */]);Templates.propTypes={dialog:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object.isRequired,handleCancel:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired};/* harmony default export */ __webpack_exports__["a"] = (Templates);

/***/ })

});
//# sourceMappingURL=7.fe94e4bf.chunk.js.map