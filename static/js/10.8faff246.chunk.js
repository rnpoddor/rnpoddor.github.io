webpackJsonp([10],{

/***/ 1162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ClientOfDealer__ = __webpack_require__(1163);
/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__ClientOfDealer__["a" /* default */]);

/***/ }),

/***/ 1163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Button__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_metadata_react_App_Dialog__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connect__ = __webpack_require__(1164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Form__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_metadata_react_DataField__ = __webpack_require__(161);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * ### Карточка покупателя
 * каркас компонента - визуальная глупая часть
 *
 * Created by Evgeniy Malyarov on 13.11.2017.
 */var ClientOfDealer=function(_Component){_inherits(ClientOfDealer,_Component);function ClientOfDealer(props,context){_classCallCheck(this,ClientOfDealer);var _this=_possibleConstructorReturn(this,(ClientOfDealer.__proto__||Object.getPrototypeOf(ClientOfDealer)).call(this,props,context));_initialiseProps.call(_this);var handleCancel=props.handleCancel,handleCalck=props.handleCalck,_props$dialog=props.dialog,ref=_props$dialog.ref,cmd=_props$dialog.cmd,_mgr=_props$dialog._mgr;_this.handleCancel=handleCancel.bind(_this);_this.handleCalck=handleCalck.bind(_this);_this.obj=_mgr.by_ref[ref];var meta=_this.meta=_mgr.metadata().form[cmd];var data=_this.data=_this.obj[cmd].split('\xA0');// виртуальные данные
var fields=Object.keys(meta.fields);_this.fake_obj={_metadata:function _metadata(fld){return fld?meta.fields[fld]:meta;},get _manager(){return _mgr;}};var _loop=function _loop(fld){_this.fake_obj.__define(fld,{get:function get(){return $p.utils.fetch_type(data[fields.indexOf(fld)],meta.fields[fld]);},set:function set(v){data[fields.indexOf(fld)]=v;}});};var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=fields[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var fld=_step.value;_loop(fld);}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}return _this;}_createClass(ClientOfDealer,[{key:'renderItems',value:function renderItems(items){var _this2=this;var fake_obj=this.fake_obj,meta=this.meta;return items.map(function(item,index){if(Array.isArray(item)){return _this2.renderItems(item);}if(item.element==='DataField'){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_metadata_react_DataField__["a" /* default */],{key:index,_obj:fake_obj,_fld:item.fld,_meta:meta.fields[item.fld]});}if(item.element==='FormGroup'){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Form__["FormGroup"],{key:index,row:item.row},_this2.renderItems(item.items));}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{key:index},'\u041D\u0435 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043E \u0432 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438');});}},{key:'render',value:function render(){var handleCancel=this.handleCancel,handleOk=this.handleOk,meta=this.meta,classes=this.props.classes;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_metadata_react_App_Dialog__["a" /* default */],{open:true,initFullScreen:true,classes:{paper:classes.paper},title:'\u0420\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u0430',onClose:handleCancel,actions:[__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Button___default.a,{key:'ok',onClick:handleOk,color:'primary'},'\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0438 \u0437\u0430\u043A\u0440\u044B\u0442\u044C'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Button___default.a,{key:'cancel',onClick:handleCancel,color:'primary'},'\u0417\u0430\u043A\u0440\u044B\u0442\u044C')]},this.renderItems(meta.obj.items));}}]);return ClientOfDealer;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);var _initialiseProps=function _initialiseProps(){var _this3=this;this.handleOk=function(){var data=_this3.data,obj=_this3.obj,dialog=_this3.props.dialog;obj[dialog.cmd]=data.join('\xA0');_this3.handleCancel();};};ClientOfDealer.propTypes={classes:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,dialog:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,handlers:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,handleCalck:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,handleCancel:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4__connect__["a" /* default */])(ClientOfDealer));

/***/ }),

/***/ 1164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__(1165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_compose__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose_compose__);
/**
 * ### Карточка покупателя
 * обработчики событий и модификаторы данных
 *
 * Created by Evgeniy Malyarov on 13.11.2017.
 */function mapStateToProps(state,props){return{handleCalck:function handleCalck(){//dp.calc_order.production.sync_grid(props.dialog.wnd.elmnts.grids.production);
return Promise.resolve();},handleCancel:function handleCancel(){props.handlers.handleIfaceState({component:'DataObjPage',name:'dialog',value:null});}};}// function mapDispatchToProps(dispatch) {
//   return {};
// }
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_recompose_compose___default()(__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* default */],Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps/*, mapDispatchToProps */)));

/***/ }),

/***/ 1165:
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

/***/ })

});
//# sourceMappingURL=10.8faff246.chunk.js.map