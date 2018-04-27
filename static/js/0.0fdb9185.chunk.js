webpackJsonp([0],{

/***/ 1130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chartscharacteristics__ = __webpack_require__(1142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reports__ = __webpack_require__(1145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dataprocessors__ = __webpack_require__(1158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_index__ = __webpack_require__(1189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__openjscad_export_dxf__ = __webpack_require__(1191);
// модификаторы объектов и менеджеров данных

// // модификаторы справочников
// import catalogs from './catalogs';
//
// // модификаторы документов
// import documents from './documents';
//
// модификаторы планов видов характеристик

//
// модификаторы отчетов

//
// модификаторы обработок

//
// общие модули


// обработчик экспорта в dxf


/* harmony default export */ __webpack_exports__["default"] = (function ($p) {
  // catalogs($p);
  // documents($p);
  Object(__WEBPACK_IMPORTED_MODULE_0__chartscharacteristics__["a" /* default */])($p);
  Object(__WEBPACK_IMPORTED_MODULE_1__reports__["a" /* default */])($p);
  Object(__WEBPACK_IMPORTED_MODULE_2__dataprocessors__["a" /* default */])($p);
  Object(__WEBPACK_IMPORTED_MODULE_3__common_index__["a" /* default */])($p);
  Object(__WEBPACK_IMPORTED_MODULE_4__openjscad_export_dxf__["a" /* default */])($p);
});


/***/ }),

/***/ 1139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dom__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Portal__ = __webpack_require__(1152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LegacyPortal__ = __webpack_require__(1154);





var Portal = void 0;

if (__WEBPACK_IMPORTED_MODULE_0_react_dom___default.a.createPortal) {
  Portal = __WEBPACK_IMPORTED_MODULE_1__Portal__["a" /* default */];
} else {
  Portal = __WEBPACK_IMPORTED_MODULE_2__LegacyPortal__["a" /* default */];
}

/* harmony default export */ __webpack_exports__["a"] = (Portal);

/***/ }),

/***/ 1140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export disableSelect */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultTheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var disableSelect={userSelect:'none',WebkitUserSelect:'none',msUserSelect:'none',MozUserSelect:'none',OUserSelect:'none'};var defaultTheme={title:{userSelect:'none',WebkitUserSelect:'none',msUserSelect:'none',MozUserSelect:'none',OUserSelect:'none',overflow:'hidden',width:'100%',height:30},frame:{position:'absolute',margin:0,padding:0,overflow:'hidden'},transition:'all 0.25s ease-in-out'};function prefixedTransition(transition){return transition?{transition:transition,WebkitTransition:transition,msTransition:transition,MozTransition:transition,OTransition:transition}:{};}var DnR=function(_React$Component){_inherits(DnR,_React$Component);function DnR(props){_classCallCheck(this,DnR);var _this=_possibleConstructorReturn(this,(DnR.__proto__||Object.getPrototypeOf(DnR)).call(this,props));var _this$props=_this.props,transition=_this$props.transition,theme=_this$props.theme;_this.cursorX=0;_this.cursorY=0;_this.clicked=null;_this.allowTransition=false;_this.frameRect={};_this.state={cursor:'auto',transition:prefixedTransition(transition?transition:theme.transition)};_this.mouseMoveListener=_this._onMove.bind(_this);_this.mouseUpListener=_this._onUp.bind(_this);return _this;}_createClass(DnR,[{key:'componentDidMount',value:function componentDidMount(){var _props=this.props,initialWidth=_props.initialWidth,initialHeight=_props.initialHeight,initialTop=_props.initialTop,initialLeft=_props.initialLeft,attachedTo=_props.attachedTo;var boundingBox=this.getFrameRect();this.frameRect.width=initialWidth||boundingBox.width;this.frameRect.height=initialHeight||boundingBox.height;this.frameRect.top=initialTop||this.refs.frame.offsetTop;this.frameRect.left=initialLeft||this.refs.frame.offsetLeft;attachedTo.addEventListener('mousemove',this.mouseMoveListener);attachedTo.addEventListener('mouseup',this.mouseUpListener);}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){if(nextProps.transition!==this.props.transition){this.setState({transition:prefixedTransition(nextProps.transition)});}}},{key:'componentWillUnmount',value:function componentWillUnmount(){this.props.attachedTo.removeEventListener('mousemove',this.mouseMoveListener);this.props.attachedTo.removeEventListener('mouseup',this.mouseUpListener);}},{key:'transform',value:function transform(state){var allowTransition=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var updateHistory=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;var boundingBox=this.getFrameRect();var top=this.refs.frame.offsetTop;var left=this.refs.frame.offsetLeft;var width=boundingBox.width;var height=boundingBox.height;if(updateHistory){this.prevState={top:top,left:left,width:width,height:height};}if(!state)return;this.frameRect.top=typeof state.top==='number'?state.top:state.bottom?state.bottom-(state.height||height):top;this.frameRect.left=typeof state.left==='number'?state.left:state.right?state.right-(state.width||width):left;this.frameRect.width=typeof state.width==='number'?state.width:typeof state.right==='number'&&typeof state.left==='number'?state.right-state.left:typeof state.right==='number'?state.right-this.frameRect.left:width;this.frameRect.height=typeof state.height==='number'?state.height:typeof state.bottom==='number'&&typeof state.top==='number'?state.top-state.bottom:typeof state.bottom==='number'?state.bottom-this.frameRect.top:height;this.allowTransition=allowTransition;if(this.props.onTransform){setTimeout(this.props.onTransform.bind(this,this.frameRect,this.prevState));}this.forceUpdate();}},{key:'restore',value:function restore(){var allowTransition=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;this.transform(this.prevState,allowTransition);}},{key:'minimize',value:function minimize(){var allowTransition=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;this.transform({width:0,height:0},allowTransition);}},{key:'maximize',value:function maximize(){var allowTransition=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;this.transform({top:0,left:0,width:this.props.attachedTo.innerWidth,height:this.props.attachedTo.innerHeight},allowTransition);}},{key:'render',value:function render(){var _this2=this;var _props2=this.props,style=_props2.style,contentStyle=_props2.contentStyle,contentClassName=_props2.contentClassName,titleStyle=_props2.titleStyle,theme=_props2.theme,minWidth=_props2.minWidth,minHeight=_props2.minHeight,animate=_props2.animate,cursorRemap=_props2.cursorRemap,children=_props2.children,boundary=_props2.boundary,onMove=_props2.onMove,onResize=_props2.onResize;var pervFrameRect=Object.assign({},this.frameRect);if(this.clicked){var hits=this.hitEdges;var boundingBox=this.clicked.boundingBox;if(hits.top||hits.bottom||hits.left||hits.right){if(hits.right)this.frameRect.width=Math.max(this.cursorX-boundingBox.left,minWidth)+'px';if(hits.bottom)this.frameRect.height=Math.max(this.cursorY-boundingBox.top,minHeight)+'px';if(hits.left){var currentWidth=boundingBox.right-this.cursorX;if(currentWidth>minWidth){this.frameRect.width=currentWidth;this.frameRect.left=this.clicked.frameLeft+this.cursorX-this.clicked.x;}}if(hits.top){var currentHeight=boundingBox.bottom-this.cursorY;if(currentHeight>minHeight){this.frameRect.height=currentHeight;this.frameRect.top=this.clicked.frameTop+this.cursorY-this.clicked.y;}}}else if(this.state.cursor==='move'){this.frameRect.top=this.clicked.frameTop+this.cursorY-this.clicked.y;this.frameRect.left=this.clicked.frameLeft+this.cursorX-this.clicked.x;}}if(boundary){var _frameRect=this.frameRect,top=_frameRect.top,left=_frameRect.left,width=_frameRect.width,height=_frameRect.height;if(typeof boundary.top==='number'&&top<boundary.top){this.frameRect.top=boundary.top;}if(typeof boundary.bottom==='number'&&top+height>boundary.bottom){this.frameRect.top=boundary.bottom-height;if(typeof boundary.top==='number'&&this.frameRect.top<boundary.top){this.frameRect.top=boundary.top;this.frameRect.height=boundary.bottom-boundary.top;}}if(typeof boundary.left==='number'&&left<boundary.left){this.frameRect.left=boundary.left;}if(typeof boundary.right==='number'&&top+height>boundary.right){this.frameRect.left=boundary.right-width;if(typeof boundary.left==='number'&&this.frameRect.left<boundary.left){this.frameRect.left=boundary.left;this.frameRect.width=boundary.right-boundary.left;}}}var cursor=this.state.cursor;if(cursorRemap){var res=cursorRemap.call(this,cursor);if(res&&typeof res==='string')cursor=res;}var dnrState={cursor:cursor,clicked:this.clicked,frameRect:this.frameRect,allowTransition:this.allowTransition};var titleBar=__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{ref:'title',style:Object.assign({},theme.title,titleStyle,{cursor:cursor})},typeof this.props.titleBar!=='string'?__WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(this.props.titleBar,{dnrState:dnrState}):this.props.titleBar);var childrenWithProps=__WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(children,function(child){return typeof child==='string'?child:__WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child,{dnrState:dnrState});});var frameTransition=animate&&this.allowTransition?this.state.transition:{};if(onMove&&(pervFrameRect.top!==this.frameRect.top||pervFrameRect.left!==this.frameRect.left)){setTimeout(onMove.bind(this,this.frameRect,pervFrameRect));}if(onResize&&(pervFrameRect.width!==this.frameRect.width||pervFrameRect.height!==this.frameRect.height)){setTimeout(onResize.bind(this,this.frameRect,pervFrameRect));}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{ref:'frame',onMouseDownCapture:this._onDown.bind(this),onMouseMoveCapture:function onMouseMoveCapture(e){if(_this2.clicked!==null){e.preventDefault();}},style:Object.assign({},theme.frame,frameTransition,{cursor:cursor},style,this.frameRect,this.clicked?disableSelect:{})},titleBar,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{ref:'content',className:contentClassName,style:Object.assign({position:'absolute',width:'100%',top:theme.title.height,bottom:0},contentStyle)},childrenWithProps));}},{key:'getChildContext',value:function getChildContext(){return{dnr:this};}},{key:'getFrameRect',value:function getFrameRect(){return this.refs.frame.getBoundingClientRect();}},{key:'getDOMFrame',value:function getDOMFrame(){return this.refs.frame;}},{key:'getTitleRect',value:function getTitleRect(){return this.refs.title.getBoundingClientRect();}},{key:'_cursorStatus',value:function _cursorStatus(e){var boundingBox=this.getFrameRect();this.cursorX=e.clientX;this.cursorY=e.clientY;if(this.clicked)return;var hitRange=this.props.edgeDetectionRange;var hitTop=this.cursorY<=boundingBox.top+hitRange;var hitBottom=this.cursorY>=boundingBox.bottom-hitRange;var hitLeft=this.cursorX<=boundingBox.left+hitRange;var hitRight=this.cursorX>=boundingBox.right-hitRange;var cursor='auto';if(hitTop||hitBottom||hitLeft||hitRight){if(hitRight&&hitBottom||hitLeft&&hitTop){cursor='nwse-resize';}else if(hitRight&&hitTop||hitBottom&&hitLeft){cursor='nesw-resize';}else if(hitRight||hitLeft){cursor='ew-resize';}else if(hitBottom||hitTop){cursor='ns-resize';}e.stopPropagation();}else{var titleBounding=this.getTitleRect();if(this.cursorX>titleBounding.left&&this.cursorX<titleBounding.right&&this.cursorY>titleBounding.top&&this.cursorY<titleBounding.bottom){cursor='move';}}this.hitEdges={top:hitTop,bottom:hitBottom,left:hitLeft,right:hitRight};if(cursor!==this.state.cursor){this.setState({cursor:cursor});}}},{key:'_onDown',value:function _onDown(e){this.allowTransition=false;this._cursorStatus(e);var boundingBox=this.getFrameRect();this.clicked={x:e.clientX,y:e.clientY,boundingBox:boundingBox,frameTop:this.refs.frame.offsetTop,frameLeft:this.refs.frame.offsetLeft};}},{key:'_onUp',value:function _onUp(e){this.clicked=null;this._cursorStatus(e);}},{key:'_onMove',value:function _onMove(e){this._cursorStatus(e);if(this.clicked!==null){this.forceUpdate();}}}]);return DnR;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (DnR);DnR.propTypes={titleBar:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string]),style:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,contentClassName:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,contentStyle:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,titleStyle:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,theme:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,minWidth:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,minHeight:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,edgeDetectionRange:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,initialWidth:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,initialHeight:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,initialTop:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,initialLeft:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,transition:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,animate:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,onMove:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,onResize:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,onTransform:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,cursorRemap:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,boundary:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,attachedTo:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object};DnR.defaultProps={minWidth:300,minHeight:200,edgeDetectionRange:5,theme:defaultTheme,initialWidth:null,initialHeight:null,initialTop:null,initialLeft:null,animate:true,attachedTo:window};DnR.childContextTypes={dnr:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object};

/***/ }),

/***/ 1142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cch_predefined_elmnts__ = __webpack_require__(1143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cch_properties__ = __webpack_require__(1144);
// модификаторы планов видов характеристик

// предопределенные элементы


// дополнительные реквизиты и сведения


/* harmony default export */ __webpack_exports__["a"] = (function ($p) {
	Object(__WEBPACK_IMPORTED_MODULE_0__cch_predefined_elmnts__["a" /* default */])($p);
	Object(__WEBPACK_IMPORTED_MODULE_1__cch_properties__["a" /* default */])($p);
});


/***/ }),

/***/ 1143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * ### Дополнительные методы ПВХ Предопределенные элементы
 * Предопределенные элементы - аналог констант для хранения ссылочных и списочных настроек приложения
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2018
 * @module cch_predefined_elmnts
 */

/* harmony default export */ __webpack_exports__["a"] = (function ($p) {

  const {job_prm, adapters, doc, cch: {predefined_elmnts: _mgr}, utils, md} = $p;

  // Подписываемся на событие окончания загрузки локальных данных
  adapters.pouch.once('pouch_doc_ram_loaded', () => {
    // читаем элементы из pouchdb и создаём свойства
    _mgr.adapter.find_rows(_mgr, {_raw: true, _top: 500, _skip: 0})
      .then((rows) => {

        const parents = {};

        rows.forEach((row) => {
          if(row.is_folder && row.synonym) {
            const ref = row._id.split('|')[1];
            parents[ref] = row.synonym;
            !job_prm[row.synonym] && job_prm.__define(row.synonym, {value: {}});
          }
        });

        rows.forEach((row) => {
          if(!row.is_folder && row.synonym && parents[row.parent] && !job_prm[parents[row.parent]][row.synonym]) {

            let _mgr;

            if(row.type.is_ref) {
              const tnames = row.type.types[0].split('.');
              _mgr = $p[tnames[0]][tnames[1]];
            }

            if(row.list == -1) {

              job_prm[parents[row.parent]].__define(row.synonym, {
                value: (() => {
                  const res = {};
                  row.elmnts.forEach((row) => {
                    res[row.elm] = _mgr ? _mgr.get(row.value, false, false) : row.value;
                  });
                  return res;
                })(),
                enumerable: true
              });

            }
            else if(row.list) {

              job_prm[parents[row.parent]].__define(row.synonym, {
                value: row.elmnts.map((row) => {
                  if(_mgr) {
                    const value = _mgr.get(row.value, false, false);
                    if(!$p.utils.is_empty_guid(row.elm)) {
                      value._formula = row.elm;
                    }
                    return value;
                  }
                  else {
                    return row.value;
                  }
                }),
                enumerable: true
              });
            }
            else {

              if(job_prm[parents[row.parent]].hasOwnProperty(row.synonym)) {
                delete job_prm[parents[row.parent]][row.synonym];
              }

              job_prm[parents[row.parent]].__define(row.synonym, {
                value: _mgr ? _mgr.get(row.value, false, false) : row.value,
                configurable: true,
                enumerable: true
              });
            }

          }
        });
      })
      .then(() => {

        // дополним автовычисляемыми свойствами
        const {properties} = job_prm;
        if(properties) {
          const {calculated, width, length} = properties;
          if(width && calculated.indexOf(width) == -1) {
            calculated.push(width);
            width._calculated_value = {execute: (obj) => obj && obj.calc_order_row && obj.calc_order_row.width || 0};
          }
          if(length && calculated.indexOf(length) == -1) {
            calculated.push(length);
            length._calculated_value = {execute: (obj) => obj && obj.calc_order_row && obj.calc_order_row.len || 0};
          }
        }

        // рассчеты, помеченные, как шаблоны, загрузим в память заранее
        doc.calc_order.load_templates && setTimeout(doc.calc_order.load_templates.bind(doc.calc_order), 1000);


        // даём возможность завершиться другим обработчикам, подписанным на _pouch_load_data_loaded_
        setTimeout(() => md.emit('predefined_elmnts_inited'), 100);

      });

  });


  /**
   * Переопределяем геттер значения
   *
   * @property value
   * @override
   * @type {*}
   */
  delete $p.CchPredefined_elmnts.prototype.value;
  $p.CchPredefined_elmnts.prototype.__define({

    value: {
      get () {

        const mf = this.type;
        const res = this._obj ? this._obj.value : '';

        if(this._obj.is_folder) {
          return '';
        }
        if(typeof res == 'object') {
          return res;
        }
        else if(mf.is_ref) {
          if(mf.digits && typeof res === 'number') {
            return res;
          }
          if(mf.hasOwnProperty('str_len') && !utils.is_guid(res)) {
            return res;
          }
          const mgr = md.value_mgr(this._obj, 'value', mf);
          if(mgr) {
            if(utils.is_data_mgr(mgr)) {
              return mgr.get(res, false);
            }
            else {
              return utils.fetch_type(res, mgr);
            }
          }
          if(res) {
            $p.record_log(['value', mf, this._obj]);
            return null;
          }
        }
        else if(mf.date_part) {
          return utils.fix_date(this._obj.value, true);
        }
        else if(mf.digits) {
          return utils.fix_number(this._obj.value, !mf.hasOwnProperty('str_len'));
        }
        else if(mf.types[0] == 'boolean') {
          return utils.fix_boolean(this._obj.value);
        }
        else {
          return this._obj.value || '';
        }

        return this.characteristic.clr;
      },

      set(v) {

        if(this._obj.value === v) {
          return;
        }

        _mgr.emit_async('update', this, {value: this._obj.value});
        this._obj.value = v.valueOf();
        this._data._modified = true;
      }
    }
  });

});


/***/ }),

/***/ 1144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * ### Дополнительные методы плана видов характеристик _Свойства объектов_
 * аналог подсистемы _Свойства_ БСП
 *
 * @module cch_properties
 */

/* harmony default export */ __webpack_exports__["a"] = (function ($p) {

  $p.cch.properties.__define({

    /**
     * ### Проверяет заполненность обязательных полей
     *
     * @method check_mandatory
     * @override
     * @param prms {Array}
     * @param title {String}
     * @return {Boolean}
     */
    check_mandatory: {
      value(prms, title) {

        var t, row;

        // проверяем заполненность полей
        for (t in prms) {
          row = prms[t];
          if(row.param.mandatory && (!row.value || row.value.empty())) {
            $p.msg.show_msg({
              type: 'alert-error',
              text: $p.msg.bld_empty_param + row.param.presentation,
              title: title || $p.msg.bld_title
            });
            return true;
          }
        }
      }
    },

    /**
     * ### Возвращает массив доступных для данного свойства значений
     *
     * @method slist
     * @override
     * @param prop {CatObj} - планвидовхарактеристик ссылка или объект
     * @param ret_mgr {Object} - установить в этом объекте указатель на менеджера объекта
     * @return {Array}
     */
    slist: {
      value(prop, ret_mgr) {

        var res = [], rt, at, pmgr, op = this.get(prop);

        if(op && op.type.is_ref) {
          // параметры получаем из локального кеша
          for (rt in op.type.types)
            if(op.type.types[rt].indexOf('.') > -1) {
              at = op.type.types[rt].split('.');
              pmgr = $p[at[0]][at[1]];
              if(pmgr) {

                if(ret_mgr) {
                  ret_mgr.mgr = pmgr;
                }

                if(pmgr.class_name == 'enm.open_directions') {
                  pmgr.get_option_list().forEach((v) => v.value && v.value != $p.enm.tso.folding && res.push(v));
                }
                else if(pmgr.class_name.indexOf('enm.') != -1 || !pmgr.metadata().has_owners) {
                  res = pmgr.get_option_list();
                }
                else {
                  pmgr.find_rows({owner: prop}, (v) => res.push({value: v.ref, text: v.presentation}));
                }
              }
            }
        }
        return res;
      }
    }

  });

  $p.CchProperties.prototype.__define({

    /**
     * ### Является ли значение параметра вычисляемым
     *
     * @property is_calculated
     * @type Boolean
     */
    is_calculated: {
      get() {
        return ($p.job_prm.properties.calculated || []).indexOf(this) != -1;
      }
    },

    /**
     * ### Рассчитывает значение вычисляемого параметра
     * @param obj {Object}
     * @param [obj.row]
     * @param [obj.elm]
     * @param [obj.ox]
     */
    calculated_value: {
      value(obj) {
        if(!this._calculated_value) {
          if(this._formula) {
            this._calculated_value = $p.cat.formulas.get(this._formula);
          }
          else {
            return;
          }
        }
        return this._calculated_value.execute(obj);
      }
    },

    /**
     * ### Проверяет условие в строке отбора
     */
    check_condition: {
      value({row_spec, prm_row, elm, cnstr, origin, ox, calc_order}) {

        const {is_calculated} = this;
        const {utils, enm: {comparison_types}} = $p;

        // значение параметра
        const val = is_calculated ? this.calculated_value({
          row: row_spec,
          cnstr: cnstr || 0,
          elm,
          ox,
          calc_order
        }) : this.extract_value(prm_row);

        let ok = false;

        // если сравнение на равенство - решаем в лоб, если вычисляемый параметр типа массив - выясняем вхождение значения в параметр
        if(ox && !Array.isArray(val) && (prm_row.comparison_type.empty() || prm_row.comparison_type == comparison_types.eq)) {
          if(is_calculated) {
            ok = val == prm_row.value;
          }
          else {
            ox.params.find_rows({
              cnstr: cnstr || 0,
              inset: (typeof origin !== 'number' && origin) || utils.blank.guid,
              param: this,
              value: val
            }, () => {
              ok = true;
              return false;
            });
          }
        }
        // вычисляемый параметр - его значение уже рассчитано формулой (val) - сравниваем со значением в строке ограничений
        else if(is_calculated) {
          const value = this.extract_value(prm_row);
          ok = utils.check_compare(val, value, prm_row.comparison_type, comparison_types);
        }
        // параметр явно указан в табчасти параметров изделия
        else {
          ox.params.find_rows({
            cnstr: cnstr || 0,
            inset: (typeof origin !== 'number' && origin) || utils.blank.guid,
            param: this
          }, ({value}) => {
            // value - значение из строки параметра текущей продукции, val - знаяение из параметров отбора
            ok = utils.check_compare(value, val, prm_row.comparison_type, comparison_types);
            return false;
          });
        }
        return ok;
      }
    },

    /**
     * Извлекает значение параметра с учетом вычисляемости
     */
    extract_value: {
      value({comparison_type, txt_row, value}) {

        switch (comparison_type) {

        case $p.enm.comparison_types.in:
        case $p.enm.comparison_types.nin:

          if(!txt_row) {
            return value;
          }
          try {
            const arr = JSON.parse(txt_row);
            const {types} = this.type;
            if(types && types.length == 1) {
              const mgr = $p.md.mgr_by_class_name(types[0]);
              return arr.map((ref) => mgr.get(ref, false));
            }
            return arr;
          }
          catch (err) {
            return value;
          }

        default:
          return value;
        }
      }
    },

    /**
     * Возвращает массив связей текущего параметра
     */
    params_links: {
      value(attr) {

        // первым делом, выясняем, есть ли ограничитель на текущий параметр
        if(!this.hasOwnProperty('_params_links')) {
          this._params_links = $p.cat.params_links.find_rows({slave: this});
        }

        return this._params_links.filter((link) => {
          let ok = true;
          // для всех записей ключа параметров
          link.master.params.forEach((row) => {
            // выполнение условия рассчитывает объект CchProperties
            ok = row.property.check_condition({
              cnstr: attr.grid.selection.cnstr,
              ox: attr.obj._owner._owner,
              prm_row: row,
              elm: attr.obj,
            });
            if(!ok) {
              return false;
            }
          });
          return ok;
        });
      }
    },

    /**
     * Проверяет и при необходимости перезаполняет или устанваливает умолчание value в prow
     */
    linked_values: {
      value(links, prow) {
        const values = [];
        let changed;
        // собираем все доступные значения в одном массиве
        links.forEach((link) => link.values.forEach((row) => values.push(row)));
        // если значение доступно в списке - спокойно уходим
        if(values.some((row) => row._obj.value == prow.value)) {
          return;
        }
        // если есть явный default - устанавливаем
        if(values.some((row) => {
            if(row.forcibly) {
              prow.value = row._obj.value;
              return true;
            }
            if(row.by_default && (!prow.value || prow.value.empty && prow.value.empty())) {
              prow.value = row._obj.value;
              changed = true;
            }
          })) {
          return true;
        }
        // если не нашли лучшего, установим первый попавшийся
        if(changed) {
          return true;
        }
        if(values.length) {
          prow.value = values[0]._obj.value;
          return true;
        }
      }
    },

    /**
     * ### Дополняет отбор фильтром по параметрам выбора
     * Используется в полях ввода экранных форм
     * @param filter {Object} - дополняемый фильтр
     * @param attr {Object} - атрибуты OCombo
     */
    filter_params_links: {
      value(filter, attr, links) {
        // для всех отфильтрованных связей параметров
        if(!links) {
          links = this.params_links(attr);
        }
        links.forEach((link) => {
          // если ключ найден в параметрах, добавляем фильтр
          if(!filter.ref) {
            filter.ref = {in: []};
          }
          if(filter.ref.in) {
            link.values._obj.forEach((row) => {
              if(filter.ref.in.indexOf(row.value) == -1) {
                filter.ref.in.push(row.value);
              }
            });
          }
        });
      }
    }

  });

});


/***/ }),

/***/ 1145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__materials_demand__ = __webpack_require__(1146);
// модификаторы отчетов

// движение денег


/* harmony default export */ __webpack_exports__["a"] = (function ($p) {
  Object(__WEBPACK_IMPORTED_MODULE_0__materials_demand__["a" /* default */])($p);
});


/***/ }),

/***/ 1146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_RepMaterialsDemand_RepParams__ = __webpack_require__(1147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_RepMaterialsDemand_Report__ = __webpack_require__(1157);
/**
 * ### Отчет _Потребность в материалах_
 * он же - анализ спецификации прдукций
 *
 * Created 07.11.2016
 */




/* harmony default export */ __webpack_exports__["a"] = (function ($p) {

  const {characteristics} = $p.cat;

  /**
   * Класс-компонент формы отчета
   * в отчете materials_demand используется типовая форма
   */
  $p.rep.materials_demand.FrmObj = __WEBPACK_IMPORTED_MODULE_1__components_RepMaterialsDemand_Report__["a" /* default */];

  /**
   * Класс-компонент панели параметров отчета
   * @type {RepParams}
   */
  $p.rep.materials_demand.RepParams = __WEBPACK_IMPORTED_MODULE_0__components_RepMaterialsDemand_RepParams__["a" /* default */];

  /**
   * Имя табчасти, в которой живут данные отчета
   */
  $p.rep.materials_demand._tabular = 'specification';

  Object.defineProperties($p.RepMaterials_demand.prototype, {

    // подмешивает в наименование материала характеристику и размеры
    material: {
      value(row) {

        const {nom, characteristic, len, width} = row;

        let res = nom.name;

        if (!characteristic.empty()) {
          res += ' ' + characteristic.presentation;
        }

        if (len && width)
          row.sz = (1000 * len).toFixed(0) + "x" + (1000 * width).toFixed(0);
        else if (len)
          row.sz = + (1000 * len).toFixed(0);
        else if (width)
          row.sz = + (1000 * width).toFixed(0);

        row.nom_kind = nom.nom_kind;
        row.grouping = nom.grouping;
        row.article = nom.article;
        row.material = res;

        return res;
      }
    },

    /**
     * Рассчитывает данные отчета
     *
     * @method calculate
     * @for RepMaterials_demand
     * @param scheme
     * @return {Promise.<TResult>}
     */
    calculate: {
      value() {

        const {specification, production, scheme, _manager} = this;
        const arefs = [], aobjs = [],
          spec_flds = Object.keys(characteristics.metadata('specification').fields),
          rspec_flds = Object.keys(_manager.metadata('specification').fields);

        // получаем массив объектов продукций
        production.forEach((row) => {
          if(!row.characteristic.empty() && row.characteristic.is_new() && arefs.indexOf(row.characteristic.ref) == -1) {
            arefs.push(row.characteristic.ref);
            aobjs.push(row.characteristic.load());
          }
        });

        // чистим таблицу результата
        specification.clear();
        if(!specification._rows) {
          specification._rows = [];
        }
        else {
          specification._rows.length = 0;
        }

        return Promise.all(aobjs)

        // получаем массив объектов заказов и вложенных характеристик
          .then(() => {

            arefs.length = 0;
            aobjs.length = 0;

            production.each((row) => {

              if(!row.characteristic.empty() && !row.characteristic.calc_order.empty()
                && row.characteristic.calc_order.is_new() && arefs.indexOf(row.characteristic.calc_order.ref) == -1) {
                arefs.push(row.characteristic.calc_order.ref);
                aobjs.push(row.characteristic.calc_order.load());
              }

              row.characteristic.specification.each(function (sprow) {
                if(!sprow.characteristic.empty() && sprow.characteristic.is_new() && arefs.indexOf(sprow.characteristic.ref) == -1) {
                  arefs.push(sprow.characteristic.ref);
                  aobjs.push(sprow.characteristic.load());
                }
              });

            });

            return Promise.all(aobjs);

          })

          .then(() => {

            const prows = {};

            // бежим по продукции и заполняем результат
            production.each((row) => {
              if(!row.characteristic.empty()) {
                row.characteristic.specification.each((sprow) => {
                  let resrow = {};
                  spec_flds.forEach(fld => {
                    if(rspec_flds.indexOf(fld) != -1) {
                      resrow[fld] = sprow[fld];
                    }
                  });
                  resrow = specification.add(resrow);

                  // учтём количество
                  resrow.qty = resrow.qty * row.qty;
                  resrow.totqty = resrow.totqty * row.qty;
                  resrow.totqty1 = resrow.totqty1 * row.qty;
                  resrow.amount = resrow.amount * row.qty;
                  resrow.amount_marged = resrow.amount_marged * row.qty;

                  // рассчитаем недостающие поля

                  // если номер элемента < 0, интерпретируем его, как номер конструкции
                  if(resrow.elm > 0) {
                    resrow.cnstr = row.characteristic.coordinates.find_rows({elm: resrow.elm})[0].cnstr;
                  }
                  else if(resrow.elm < 0) {
                    resrow.cnstr = -resrow.elm;
                  }

                  // ссылка на заказ
                  resrow.calc_order = row.characteristic;

                  // номер строки изделия в исходном заказе
                  if(!prows[row.characteristic.ref]) {
                    prows[row.characteristic.ref] = row.characteristic.calc_order.production.find_rows({characteristic: row.characteristic});
                    if(prows[row.characteristic.ref].length) {
                      prows[row.characteristic.ref] = prows[row.characteristic.ref][0].row;
                    }
                    else {
                      prows[row.characteristic.ref] = 1;
                    }
                  }
                  resrow.product = prows[row.characteristic.ref];

                  // свойства номенклатуры и группировки
                  this.material(resrow);

                });
              }
            });

            // фильтруем результат с учетом разыменования и видов сравнения
            scheme.filter(specification, '', true);

            // группируем по схеме - сворачиваем результат и сохраняем его в ._rows
            scheme.group_by(specification);

        });
      }
    },

    /**
     * Дополняет табчасть продукциями выбранного заказа
     * @param row
     * @return {Promise.<TResult>}
     */
    fill_by_order: {
      value(row) {

        let pdoc;

        if(!row || !row._id) {
          if(this.calc_order.empty()) {
            return;
          }
          if(this.calc_order.is_new()) {
            pdoc = this.calc_order.load();
          }
          else {
            pdoc = Promise.resolve(this.calc_order);
          }
        }
        else {
          const ids = row._id.split('|');
          if(ids.length < 2) {
            return;
          }
          pdoc = $p.doc.calc_order.get(ids[1], 'promise');
        }

        return pdoc
          .then((doc) => {
            //this.production.clear()
            const rows = [];
            const refs = [];
            doc.production.forEach((row) => {
              if(!row.characteristic.empty()) {
                rows.push({
                  use: true,
                  characteristic: row.characteristic,
                  qty: row.quantity,
                });
                if(row.characteristic.is_new()) {
                  refs.push(row.characteristic.ref);
                }
              }
            });

            return $p.adapters.pouch.load_array($p.cat.characteristics, refs).then(() => rows);
          })
          .then((rows) => {
            this.production.load(rows);
            return rows;
          });
      }
    },

    // ресурсы по умолчанию
    // TODO: сделать признак в метаданных
    resources: {
      get() {
        return ['qty', 'totqty', 'totqty1', 'amount', 'amount_marged'];
      }
    }

  });

});






/***/ }),

/***/ 1147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Toolbar__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_IconButton__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_AddCircleOutline__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_AddCircleOutline___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_AddCircleOutline__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Delete__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Delete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Delete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_metadata_react_TabularSection__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SelectOrder__ = __webpack_require__(1148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_metadata_react_Header_toolbar__ = __webpack_require__(57);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * Индивидуальная форма настроек отчета
 */var SettingsToolbar=function(_Component){_inherits(SettingsToolbar,_Component);function SettingsToolbar(){_classCallCheck(this,SettingsToolbar);return _possibleConstructorReturn(this,(SettingsToolbar.__proto__||Object.getPrototypeOf(SettingsToolbar)).apply(this,arguments));}_createClass(SettingsToolbar,[{key:'render',value:function render(){var _props=this.props,handleAdd=_props.handleAdd,handleRemove=_props.handleRemove,handleCustom=_props.handleCustom,classes=_props.classes;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Toolbar___default.a,{disableGutters:true,className:classes.bar},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_IconButton___default.a,{title:'\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443',onClick:handleAdd},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_AddCircleOutline___default.a,null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_IconButton___default.a,{title:'\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443',onClick:handleRemove},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Delete___default.a,null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_IconButton___default.a,{key:'sep1',disabled:true},'|'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__SelectOrder__["a" /* default */],{handleSelect:handleCustom}));}}]);return SettingsToolbar;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);SettingsToolbar.propTypes={handleAdd:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,// обработчик добавления объекта
handleRemove:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,// обработчик удаления строки
handleCustom:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,classes:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired};var StyledToolbar=Object(__WEBPACK_IMPORTED_MODULE_8_metadata_react_Header_toolbar__["a" /* default */])(SettingsToolbar);var RepParams=function(_Component2){_inherits(RepParams,_Component2);function RepParams(){var _ref;var _temp,_this2,_ret;_classCallCheck(this,RepParams);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this2=_possibleConstructorReturn(this,(_ref=RepParams.__proto__||Object.getPrototypeOf(RepParams)).call.apply(_ref,[this].concat(args))),_this2),_this2.handleCustom=function(row){_this2.props._obj.fill_by_order(row).then(function(){_this2.production.forceUpdate();});},_temp),_possibleConstructorReturn(_this2,_ret);}_createClass(RepParams,[{key:'render',value:function render(){var _this3=this;var _props2=this.props,handleAdd=_props2.handleAdd,handleRemove=_props2.handleRemove,_obj=_props2._obj;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_metadata_react_TabularSection__["a" /* default */],{_obj:_obj,_tabular:'production',ref:function ref(el){return _this3.production=el;},minHeight:308,Toolbar:StyledToolbar,handleAdd:handleAdd,handleRemove:handleRemove,handleCustom:this.handleCustom});}}]);return RepParams;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);RepParams.propTypes={handleAdd:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,// обработчик добавления объекта
handleRemove:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,// обработчик удаления строки
_obj:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired};/* harmony default export */ __webpack_exports__["a"] = (RepParams);

/***/ }),

/***/ 1148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_IconButton__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Work__ = __webpack_require__(1149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Work___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Work__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_metadata_react_DnR_Dialog__ = __webpack_require__(1150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_metadata_react_DataList__ = __webpack_require__(444);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var SelectOrder=function(_Component){_inherits(SelectOrder,_Component);function SelectOrder(props,context){_classCallCheck(this,SelectOrder);var _this=_possibleConstructorReturn(this,(SelectOrder.__proto__||Object.getPrototypeOf(SelectOrder)).call(this,props,context));_this.handleTouchTap=function(event){// This prevents ghost click.
event.preventDefault();_this.setState({open:true});};_this.handleRequestClose=function(){_this.setState({open:false});};_this.handleSelect=function(row,_mgr){_this.handleRequestClose();_this.props.handleSelect(row,_mgr);};_this.state={open:false};return _this;}_createClass(SelectOrder,[{key:'render',value:function render(){var handleSelect=this.handleSelect,handleRequestClose=this.handleRequestClose,props=this.props,state=this.state;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_IconButton___default.a,{title:'\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043F\u043E \u0437\u0430\u043A\u0430\u0437\u0443',onClick:this.handleTouchTap},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons_Work___default.a,null)),state.open&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_metadata_react_DnR_Dialog__["a" /* default */],{title:'\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043F\u043E \u0437\u0430\u043A\u0430\u0437\u0443',onClose:handleRequestClose},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_metadata_react_DataList__["a" /* default */],{_mgr:$p.doc.calc_order,_acl:props._acl,handlers:{handleSelect:handleSelect},selectionMode:true,denyAddDel:true//show_variants
,show_search:true})));}}]);return SelectOrder;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);SelectOrder.propTypes={handleSelect:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired};/* harmony default export */ __webpack_exports__["a"] = (SelectOrder);

/***/ }),

/***/ 1149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createSvgIcon = __webpack_require__(9);

var _createSvgIcon2 = _interopRequireDefault(_createSvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createSvgIcon2.default)(_react2.default.createElement(
  'g',
  null,
  _react2.default.createElement('path', { d: 'M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z' })
), 'Work');

/***/ }),

/***/ 1150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_portal__ = __webpack_require__(1151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DnR__ = __webpack_require__(1140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__themes__ = __webpack_require__(1156);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 *
 *
 * @module Dialog
 *
 * Created by Evgeniy Malyarov on 12.09.2017.
 */var paneStyle={width:'60%',height:'60%',top:'25%',left:'10%',backgroundColor:'white',border:'1px solid #e0e0e0'};var Dialog=function(_Component){_inherits(Dialog,_Component);function Dialog(props,context){_classCallCheck(this,Dialog);var _this=_possibleConstructorReturn(this,(Dialog.__proto__||Object.getPrototypeOf(Dialog)).call(this,props,context));_this.state={minimize:false};_this.Windows=Object(__WEBPACK_IMPORTED_MODULE_4__themes__["a" /* WindowsTheme */])({title:props.title||'React DnR',onClose:_this.onClose.bind(_this),onMinimize:function onMinimize(){return _this._dnr.restore();},onMaximize:function onMaximize(){return _this._dnr.maximize();}});return _this;}_createClass(Dialog,[{key:'onClose',value:function onClose(){var _dnr=this._dnr,props=this.props;if(_dnr.state.cursor&&_dnr.state.cursor.indexOf('resize')==-1){_dnr.minimize();props.onClose&&setTimeout(props.onClose,200);}}},{key:'render',value:function render(){var _this2=this;var _props=this.props,children=_props.children,others=_objectWithoutProperties(_props,['children']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_portal__["a" /* Portal */],{isOpened:true},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__DnR__["a" /* default */],Object.assign({ref:function ref(el){return _this2._dnr=el;}},this.Windows,{cursorRemap:function cursorRemap(c){return c==='move'?'default':null;},style:paneStyle,contentStyle:{overflow:'auto'}},others),children));}}]);return Dialog;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (Dialog);

/***/ }),

/***/ 1151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PortalCompat__ = __webpack_require__(1139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PortalWithState__ = __webpack_require__(1155);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__PortalCompat__["a"]; });
/* unused harmony reexport PortalWithState */





/***/ }),

/***/ 1152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(1153);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    _classCallCheck(this, Portal);

    return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  _createClass(Portal, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
    }
  }, {
    key: 'render',
    value: function render() {
      if (!__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* canUseDOM */]) {
        return null;
      }
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }
      return Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["createPortal"])(this.props.children, this.props.node || this.defaultNode);
    }
  }]);

  return Portal;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Portal.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,
  node: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any
};

/* harmony default export */ __webpack_exports__["a"] = (Portal);

/***/ }),

/***/ 1153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return canUseDOM; });
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ }),

/***/ 1154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This file is a fallback for a consumer who is not yet on React 16
// as createPortal was introduced in React 16





var Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    _classCallCheck(this, Portal);

    return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  _createClass(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderPortal();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(props) {
      this.renderPortal();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.unmountComponentAtNode(this.defaultNode || this.props.node);
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
      this.portal = null;
    }
  }, {
    key: 'renderPortal',
    value: function renderPortal(props) {
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }

      var children = this.props.children;
      // https://gist.github.com/jimfb/d99e0678e9da715ccf6454961ef04d1b
      if (typeof this.props.children.type === 'function') {
        children = __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(this.props.children);
      }

      this.portal = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.unstable_renderSubtreeIntoContainer(this, children, this.props.node || this.defaultNode);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Portal;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Portal);


Portal.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node.isRequired,
  node: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any
};

/***/ }),

/***/ 1155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PortalCompat__ = __webpack_require__(1139);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var KEYCODES = {
  ESCAPE: 27
};

var PortalWithState = function (_React$Component) {
  _inherits(PortalWithState, _React$Component);

  function PortalWithState(props) {
    _classCallCheck(this, PortalWithState);

    var _this = _possibleConstructorReturn(this, (PortalWithState.__proto__ || Object.getPrototypeOf(PortalWithState)).call(this, props));

    _this.portalNode = null;
    _this.state = { active: !!props.defaultOpen };
    _this.openPortal = _this.openPortal.bind(_this);
    _this.closePortal = _this.closePortal.bind(_this);
    _this.wrapWithPortal = _this.wrapWithPortal.bind(_this);
    _this.handleOutsideMouseClick = _this.handleOutsideMouseClick.bind(_this);
    _this.handleKeydown = _this.handleKeydown.bind(_this);
    return _this;
  }

  _createClass(PortalWithState, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.closeOnEsc) {
        document.addEventListener('keydown', this.handleKeydown);
      }
      if (this.props.closeOnOutsideClick) {
        document.addEventListener('click', this.handleOutsideMouseClick);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.closeOnEsc) {
        document.removeEventListener('keydown', this.handleKeydown);
      }
      if (this.props.closeOnOutsideClick) {
        document.removeEventListener('click', this.handleOutsideMouseClick);
      }
    }
  }, {
    key: 'openPortal',
    value: function openPortal(e) {
      if (this.state.active) {
        return;
      }
      if (e && e.nativeEvent) {
        e.nativeEvent.stopImmediatePropagation();
      }
      this.setState({ active: true }, this.props.onOpen);
    }
  }, {
    key: 'closePortal',
    value: function closePortal() {
      if (!this.state.active) {
        return;
      }
      this.setState({ active: false }, this.props.onClose);
    }
  }, {
    key: 'wrapWithPortal',
    value: function wrapWithPortal(children) {
      var _this2 = this;

      if (!this.state.active) {
        return null;
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__PortalCompat__["a" /* default */],
        {
          node: this.props.node,
          key: 'react-portal',
          ref: function ref(portalNode) {
            return _this2.portalNode = portalNode;
          }
        },
        children
      );
    }
  }, {
    key: 'handleOutsideMouseClick',
    value: function handleOutsideMouseClick(e) {
      if (!this.state.active) {
        return;
      }
      var root = this.portalNode.props.node || this.portalNode.defaultNode;
      if (!root || root.contains(e.target) || e.button && e.button !== 0) {
        return;
      }
      this.closePortal();
    }
  }, {
    key: 'handleKeydown',
    value: function handleKeydown(e) {
      if (e.keyCode === KEYCODES.ESCAPE && this.state.active) {
        this.closePortal();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children({
        openPortal: this.openPortal,
        closePortal: this.closePortal,
        portal: this.wrapWithPortal,
        isOpen: this.state.active
      });
    }
  }]);

  return PortalWithState;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

PortalWithState.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  defaultOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  node: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,
  openByClickOn: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element,
  closeOnEsc: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  closeOnOutsideClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  onOpen: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onClose: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};

PortalWithState.defaultProps = {
  onOpen: function onOpen() {},
  onClose: function onClose() {}
};

/* unused harmony default export */ var _unused_webpack_default_export = (PortalWithState);

/***/ }),

/***/ 1156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Button */
/* unused harmony export TitleBar */
/* unused harmony export OSXTheme */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowsTheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DnR__ = __webpack_require__(1140);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Button=function(_React$Component){_inherits(Button,_React$Component);function Button(props){_classCallCheck(this,Button);var _this=_possibleConstructorReturn(this,(Button.__proto__||Object.getPrototypeOf(Button)).call(this,props));_this.state={hover:false,down:false};return _this;}_createClass(Button,[{key:'render',value:function render(){var _this2=this;var _props=this.props,style=_props.style,hoverStyle=_props.hoverStyle,downStyle=_props.downStyle,children=_props.children,cursor=_props.cursor,other=_objectWithoutProperties(_props,['style','hoverStyle','downStyle','children','cursor']);var dragging=/resize$/.test(cursor);var buttonStyle=Object.assign({},style,this.state.hover&&!dragging?hoverStyle:{},this.state.down&&!dragging?downStyle:{},{cursor:cursor});return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',Object.assign({onMouseEnter:function onMouseEnter(){return _this2.setState({hover:true});},onMouseLeave:function onMouseLeave(){return _this2.setState({hover:false,down:false});},onMouseDown:function onMouseDown(){return _this2.setState({down:true});},onMouseUp:function onMouseUp(){return _this2.setState({down:false});},style:buttonStyle},other),children);}}]);return Button;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);var TitleBar=function TitleBar(_ref){var children=_ref.children,buttons=_ref.buttons,button1=_ref.button1,button2=_ref.button2,button3=_ref.button3,button1Children=_ref.button1Children,button2Children=_ref.button2Children,button3Children=_ref.button3Children,dnrState=_ref.dnrState;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',buttons,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Button,Object.assign({},button1,{cursor:dnrState.cursor}),button1Children),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Button,Object.assign({},button2,{cursor:dnrState.cursor}),button2Children),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Button,Object.assign({},button3,{cursor:dnrState.cursor}),button3Children)),children);};var OSXTheme=function OSXTheme(_ref2){var title=_ref2.title,onClose=_ref2.onClose,onMinimize=_ref2.onMinimize,onMaximize=_ref2.onMaximize;var titleHeight=25;var buttonRadius=6;var fontSize=14;var fontFamily='Helvetica, sans-serif';var style={height:titleHeight};var buttonStyle={padding:0,margin:0,marginRight:'4px',width:buttonRadius*2,height:buttonRadius*2,borderRadius:buttonRadius,content:'',border:'1px solid rgba(0, 0, 0, 0.2)',outline:'none'};var buttons={style:{height:titleHeight,position:'absolute',float:'left',margin:'0 8px',display:'flex',alignItems:'center'}};var closeButton={style:Object.assign({},buttonStyle,{backgroundColor:'rgb(255, 97, 89)'}),hoverStyle:{backgroundColor:'rgb(230, 72, 64)'},downStyle:{backgroundColor:'rgb(204, 46, 38)'},onClick:onClose};var minimizeButton={style:Object.assign({},buttonStyle,{backgroundColor:'rgb(255, 191, 47)'}),hoverStyle:{backgroundColor:'rgb(230, 166, 22)'},downStyle:{backgroundColor:'rgb(204, 140, 0)'},onClick:onMinimize};var maximizeButton={style:Object.assign({},buttonStyle,{backgroundColor:'rgb(37, 204, 62)'}),hoverStyle:{backgroundColor:'rgb(12, 179, 37)'},downStyle:{backgroundColor:'rgb(0, 153, 11)'},onClick:onMaximize};return{theme:{title:Object.assign({},__WEBPACK_IMPORTED_MODULE_1__DnR__["b" /* defaultTheme */].title,{borderTopLeftRadius:'5px',borderTopRightRadius:'5px',background:'linear-gradient(0deg, #d8d8d8, #ececec)',color:'rgba(0, 0, 0, 0.7)',// fontFamily: fontFamily,
// fontSize: fontSize,
height:titleHeight}),frame:Object.assign({},__WEBPACK_IMPORTED_MODULE_1__DnR__["b" /* defaultTheme */].frame,{borderRadius:'5px'}),transition:'all 0.2s ease-in-out'},titleBar:__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TitleBar,{style:style,buttons:buttons,button1:closeButton,button2:minimizeButton,button3:maximizeButton},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{style:{width:'100%',height:'100%',display:'flex',padding:'4px'// alignItems: 'center',
// justifyContent: 'center'
}},title))};};var WindowsTheme=function WindowsTheme(_ref3){var title=_ref3.title,onClose=_ref3.onClose,onMinimize=_ref3.onMinimize,onMaximize=_ref3.onMaximize,_ref3$titleBarColor=_ref3.titleBarColor,titleBarColor=_ref3$titleBarColor===undefined?'#757575':_ref3$titleBarColor;var titleHeight=30;var buttonRadius=6;var fontSize=14;var fontFamily='Roboto, Arial, sans-serif';var style={height:titleHeight};var buttonStyle={padding:0,margin:0,width:titleHeight,height:titleHeight,outline:'none',border:'none',textAlign:'center',color:'white'};var buttons={style:{height:titleHeight,position:'absolute',right:0,margin:0,display:'flex',alignItems:'center',verticalAlign:'baseline'}};var closeButton={style:Object.assign({},buttonStyle,{fontSize:'30px',fontWeight:100,lineHeight:'46px',backgroundColor:titleBarColor}),hoverStyle:{backgroundColor:'#ec6060'},downStyle:{backgroundColor:'#bc4040'},onClick:onClose};var minimizeButton={style:Object.assign({},buttonStyle,{fontSize:'20px',lineHeight:'32px',backgroundColor:titleBarColor}),hoverStyle:{backgroundColor:'rgba(0, 0, 0, 0.1)'},downStyle:{backgroundColor:'rgba(0, 0, 0, 0.2)'},onClick:onMinimize};var maximizeButton={style:Object.assign({},buttonStyle,{fontSize:'22px',lineHeight:'12px',backgroundColor:titleBarColor}),hoverStyle:{backgroundColor:'rgba(0, 0, 0, 0.1)'},downStyle:{backgroundColor:'rgba(0, 0, 0, 0.2)'},onClick:onMaximize};return{theme:{title:Object.assign({},__WEBPACK_IMPORTED_MODULE_1__DnR__["b" /* defaultTheme */].title,{background:titleBarColor,color:'white',// fontFamily: fontFamily,
// fontSize: fontSize,
height:titleHeight}),frame:Object.assign({},__WEBPACK_IMPORTED_MODULE_1__DnR__["b" /* defaultTheme */].frame),transition:'all 0.2s ease-in-out'},titleBar:__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TitleBar,{style:style,buttons:buttons,button1:minimizeButton,button2:maximizeButton,button3:closeButton,button1Children:'\u2012',button2Children:'\u25A1',button3Children:'\u02DF'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{style:{width:'100%',height:'100%',display:'flex',padding:'4px'// alignItems: 'center',
//justifyContent: 'center'
}},title))};};

/***/ }),

/***/ 1157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Button__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Menu__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_metadata_react_FrmReport__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_metadata_redux__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_metadata_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_metadata_redux__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * Индивидуальная форма отчета
 */var RepMaterialsDemand=function(_Component){_inherits(RepMaterialsDemand,_Component);function RepMaterialsDemand(props,context){_classCallCheck(this,RepMaterialsDemand);var _this=_possibleConstructorReturn(this,(RepMaterialsDemand.__proto__||Object.getPrototypeOf(RepMaterialsDemand)).call(this,props,context));_this.handleMenuOpen=function(event){_this.setState({menuOpen:true,anchorEl:event.currentTarget},function(){return _this._report&&_this._report.forceUpdate();});};_this.handleMenuClose=function(){_this.setState({menuOpen:false},function(){return _this._report&&_this._report.forceUpdate();});};_this.handleList=function(){//this.props.handleNavigate(`/${_mgr.class_name}/list${_obj ? '/?ref=' + _obj.ref : ''}`);
var _this$calcOrders=_this.calcOrders(true),ref=_this$calcOrders.ref,state=_this$calcOrders.state;if(ref&&state){_this.props.handleNavigate('/?ref='+ref+'&state_filter='+state);}else{_this.props.handleNavigate('/');}};_this.handleObj=function(){var _this$calcOrders2=_this.calcOrders(true),ref=_this$calcOrders2.ref;_this.props.handleNavigate('/doc.calc_order/'+(ref||'list'));};_this.ToolbarExt=function(){var state=_this.state;var res=_this.calcOrders();return[__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Button___default.a,{key:'go',size:'small',onClick:_this.handleMenuOpen,style:{alignSelf:'center'}},res||'Перейти'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Menu___default.a,{key:'menu',anchorEl:state.anchorEl,open:state.menuOpen,onClose:_this.handleMenuClose},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Menu__["MenuItem"],{onClick:_this.handleObj},'\u0412 \u0444\u043E\u0440\u043C\u0443 \u0437\u0430\u043A\u0430\u0437\u0430'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Menu__["MenuItem"],{onClick:_this.handleList},'\u0412 \u0444\u043E\u0440\u043C\u0443 \u0441\u043F\u0438\u0441\u043A\u0430 \u0437\u0430\u043A\u0430\u0437\u043E\u0432'))];};var _mgr=props._mgr,_obj=props._obj;_this._obj=_obj||_mgr.create();_this.state={anchorEl:undefined,menuOpen:false};return _this;}_createClass(RepMaterialsDemand,[{key:'componentDidMount',value:function componentDidMount(){var _this2=this;var location=this.props.location;var ref=location&&location.search.replace(/\?/g,'');if(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/.test(ref)){this._obj.fill_by_order({_id:'doc.calc_order|'+ref}).then(function(){_this2._report&&_this2._report.forceUpdate();}).catch(function(){return null;});}}},{key:'calcOrders',value:function calcOrders(first){var res=first?{}:'';this._obj.production.forEach(function(_ref){var calc_order=_ref.characteristic.calc_order;if(!calc_order.empty()){if(first){res.ref=calc_order.ref;res.state=calc_order.state;return false;}else if(res.indexOf(calc_order.number_doc)==-1){if(res){res+=', ';}res+=calc_order.number_doc;}}});return res;}},{key:'render',value:function render(){var _this3=this;var props=this.props,_obj=this._obj;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_metadata_react_FrmReport__["a" /* default */],Object.assign({ref:function ref(el){return _this3._report=el;}},props,{_obj:_obj,ToolbarExt:this.ToolbarExt}));}}]);return RepMaterialsDemand;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);RepMaterialsDemand.propTypes={_obj:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,_mgr:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,location:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,handleNavigate:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5_metadata_redux__["withIface"])(RepMaterialsDemand));

/***/ }),

/***/ 1158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dp_builder__ = __webpack_require__(1159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dp_builder_price__ = __webpack_require__(1160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dp_buyers_order__ = __webpack_require__(1161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dp_buyers_order_form_product_list__ = __webpack_require__(1188);
// модификаторы обработок

// перо рисовалки, испосты и раскладки


// отчет цены номенклатуры


// заказ покупателя


// форма добавления параметрической продукции



/* harmony default export */ __webpack_exports__["a"] = (function ($p) {
  Object(__WEBPACK_IMPORTED_MODULE_0__dp_builder__["a" /* default */])($p);
  Object(__WEBPACK_IMPORTED_MODULE_1__dp_builder_price__["a" /* default */])($p);
  Object(__WEBPACK_IMPORTED_MODULE_2__dp_buyers_order__["a" /* default */])($p);
  Object(__WEBPACK_IMPORTED_MODULE_3__dp_buyers_order_form_product_list__["a" /* default */])($p);
});


/***/ }),

/***/ 1159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * ### Модификаторы обработки _builder_pen_
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2018
 *
 * Created 13.05.2016
 *
 * @module dp_builder_pen
 */

/* global paper, $p */

/* harmony default export */ __webpack_exports__["a"] = (function ($p) {

  $p.dp.builder_pen.on({

    value_change: function (attr, obj) {
      if(attr.field == 'elm_type') {
        obj.inset = paper.project.default_inset({elm_type: obj.elm_type});
        obj.rama_impost = paper.project._dp.sys.inserts([obj.elm_type]);
      }
    },

  });

  $p.dp.builder_lay_impost.on({

    value_change: function (attr, obj) {
      if(attr.field == 'elm_type') {
        obj.inset_by_y = paper.project.default_inset({
          elm_type: obj.elm_type,
          pos: $p.enm.positions.ЦентрГоризонталь
        });
        obj.inset_by_x = paper.project.default_inset({
          elm_type: obj.elm_type,
          pos: $p.enm.positions.ЦентрВертикаль
        });
        obj.rama_impost = paper.project._dp.sys.inserts([obj.elm_type]);
      }
    }
  });

});




/***/ }),

/***/ 1160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Контекстный отчет по ценам номенклатуры
 *
 * @module dp_builder_price
 *
 * Created by Evgeniy Malyarov on 12.02.2017.
 */

/* harmony default export */ __webpack_exports__["a"] = (function ($p) {
  // переопределяем форму обработки в качестве отчета по ценам номенклатуры
  $p.DpBuilder_price.prototype.__define({

    form_obj: {
      value(pwnd) {

        const {nom, goods, _manager} = this;

        // форма в модальном диалоге
        const options = {
          name: 'wnd_obj_' + _manager.class_name,
          wnd: {
            top: 80 + Math.random() * 40,
            left: 120 + Math.random() * 80,
            width: 780,
            height: 400,
            modal: true,
            center: false,
            pwnd: pwnd,
            allow_close: true,
            allow_minmax: true,
            caption: `Цены: <b>${nom.name}</b>`
          }
        };

        const wnd = $p.iface.dat_blank(null, options.wnd);

        const ts_captions = {
          'fields': ['price_type', 'nom_characteristic', 'date', 'price', 'currency'],
          'headers': 'Тип Цен,Характеристика,Дата,Цена,Валюта',
          'widths': '200,*,150,120,100',
          'min_widths': '150,200,100,100,100',
          'aligns': '',
          'sortings': 'na,na,na,na,na',
          'types': 'ro,ro,dhxCalendar,ro,ro'
        };

        const {_price} = nom._data;
        if(_price) {
          for(const cref in _price) {
            _price[cref];
            for(const tref in _price[cref]) {
              for(const row of _price[cref][tref]) {
                goods.add({
                  nom_characteristic: cref,
                  price_type: tref,
                  date: row.date,
                  price: row.price,
                  currency: row.currency
                });
              }
            }
          }
        }

        goods.sort(['price_type', 'nom_characteristic', 'date']);

        wnd.elmnts.grids.goods = wnd.attachTabular({
          obj: this,
          ts: 'goods',
          pwnd: wnd,
          ts_captions: ts_captions
        });
        wnd.detachToolbar();

        return Promise.resolve();
      }
    }
  });
});


/***/ }),

/***/ 1161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * ### Модификаторы обработки _Заказ покупателя_
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2018
 *
 * Created 13.05.2016
 *
 * @module dp_buyers_order
 */

/* harmony default export */ __webpack_exports__["a"] = (function ($p) {

  // переопределяем свойства цвет и система - они будут псевдонимами свойств текущей характеристики
  $p.DpBuyers_order = class DpBuyers_order extends $p.DpBuyers_order {

    get clr() {
      return this.characteristic.clr;
    }

    set clr(v) {
      const {characteristic, _data} = this;
      if((!v && characteristic.empty()) || characteristic.clr == v) {
        return;
      }
      this._manager.emit_async('update', this, {clr: characteristic.clr});
      characteristic.clr = v;
      _data._modified = true;
    }

    get sys() {
      return this.characteristic.sys;
    }

    set sys(v) {
      const {characteristic, _data} = this;
      if((!v && characteristic.empty()) || characteristic.sys == v) {
        return;
      }
      this._manager.emit_async('update', this, {sys: characteristic.sys});
      characteristic.sys = v;
      _data._modified = true;
    }

    get extra_fields() {
      return this.characteristic.params;
    }

    // установим количество по умолчению при добавлении строки
    add_row(row) {
      if(row._owner.name === 'production') {
        row.qty = row.quantity = 1;
      }
    }

    // TODO пробежать по всем строкам ниже удаляемой и заменить elm в параметрах
    del_row(row) {
      if(row._owner.name === 'production') {
        return;
      }
    }
  };

  // свойства и методы табчасти скидок
  $p.DpBuyers_orderCharges_discountsRow = class DpBuyers_orderCharges_discountsRow extends $p.DpBuyers_orderCharges_discountsRow {

    // при изменении реквизита
    value_change(field, type, value) {
      if(field == 'discount_percent') {
        const {_owner, nom_kind} = this;
        const {_mode, _calc_order} = _owner._owner;
        _calc_order.production.forEach((row) => {
          if(row.nom.nom_kind == nom_kind) {
            row[_mode] = parseFloat(value || 0);
          }
        });
      }
    }

  };

  // свойства и методы табчасти продукции
  $p.DpBuyers_orderProductionRow = class DpBuyers_orderProductionRow extends $p.DpBuyers_orderProductionRow {

    // при изменении вставки перезаполним параметры
    value_change(field, type, value) {

      if(field == 'len' || field == 'height') {
        this[field] = value;
        if(this.len != 0 && this.height != 0) {
          this.s = (this.height * this.len / 1000000).round(3);
        }
      }

      if(field == 'inset') {
        const {_owner, row} = this;
        if(this.inset != value || type === 'force') {
          this.inset = value;
          const {product_params} = _owner._owner;
          const defaults = this.inset.product_params;
          product_params.clear({elm: row});
          this.inset.used_params.forEach((param) => {
            const prow = product_params.add({elm: row, param: param});

            // подстановка умолчаний для параметра
            defaults.find_rows({param}, (drow) => {
              prow.value = drow.value;
            });

            // подстановка умолчаний для цвета
            const {pclrs} = $p.DpBuyers_orderProductionRow;
            if(!pclrs.size) {
              const {properties} = $p.job_prm;
              pclrs.add(properties.clr_inset);
              pclrs.add(properties.clr_elm);
              pclrs.add(properties.clr_product);
            }
            defaults.forEach((drow) => {
              if(pclrs.has(drow.param)) {
                this.clr = drow.value;
                return false;
              }
            });

          });
          this._manager.emit_async('rows', _owner._owner, {product_params: true});
        }
      }
    }

  };

  $p.DpBuyers_orderProductionRow.pclrs = new Set();

  // вызов формы подключаемого react компонента из dhtmlx
  $p.dp.buyers_order.open_component = function (wnd, o, handlers, component, area = 'DataObjPage') {

    let imodule;
    switch (component){
    case 'ClientOfDealer':
      imodule = __webpack_require__.e/* import() */(10).then(__webpack_require__.bind(null, 1162));
      break;
    case 'ClientOfDealerSearch':
      imodule = __webpack_require__.e/* import() */(11).then(__webpack_require__.bind(null, 1166));
      break;
    case 'PushUtils':
      imodule = __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, 1170));
      break;
    case 'CalcOrderAdditions':
      imodule = __webpack_require__.e/* import() */(9).then(__webpack_require__.bind(null, 1183));
      break;
    }
    imodule.then((module) => handlers.handleIfaceState({
        component: area,
        name: 'dialog',
        value: {
          ref: o.ref,
          cmd: o.cmd,
          _mgr: o._mgr,
          wnd: wnd,
          Component: module.default
        },
      }));
  };

});




/***/ }),

/***/ 1188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * ### Форма ДобавитьСписокПродукции
 * В этой форме пользователь задаёт размеры и параметры вставок, по которым будет сформирована продукция заказа
 *
 *
 * Created 13.05.2016
 *
 * @module dp_buyers_order
 */


/* harmony default export */ __webpack_exports__["a"] = (function ($p) {

  class CalcOrderFormProductList {

    constructor(pwnd, calc_order) {

      this.dp = $p.dp.buyers_order.create();
      this.dp.calc_order = calc_order;

      this.attr = {

        // командная панель формы
        toolbar_struct: $p.injected_data['toolbar_product_list.xml'],

        // переопределяем обработчики кнопок командной панели формы
        toolbar_click: this.toolbar_click.bind(this),

        // переопределяем метод отрисовки шапки документа, т.к. мы хотим разместить табчасть на первой странице без закладок
        draw_pg_header: this.draw_pg_header.bind(this),

        // переопределяем метод отрисовки табличных частей, т.к. мы хотим разместить табчасть на первой странице без закладок
        draw_tabular_sections: this.draw_tabular_sections.bind(this),

      };

      this.dp.presentation = calc_order.presentation + ' - добавление продукции';

      this.dp.form_obj(pwnd, this.attr);


    }

    // навешиваем обработчики событий на элементы управления
    draw_pg_header(dp, wnd) {
      const {production} = wnd.elmnts.grids;
      const refill_prms = this.refill_prms.bind(this);
      production.attachEvent('onRowSelect', refill_prms);
      production.attachEvent('onEditCell', (stage, rId, cInd) => {
        !cInd && setTimeout(refill_prms);
      });
    }

    // переопределяем страницы формы
    draw_tabular_sections(dp, wnd) {

      this.wnd = wnd;
      wnd.maximize();

      const {elmnts} = wnd;
      elmnts.frm_toolbar.hideItem('bs_print');

      // добавляем layout на первую страницу
      wnd.detachObject(true);
      wnd.maximize();
      elmnts.layout = wnd.attachLayout({
        pattern: '2E',
        cells: [{
          id: 'a',
          text: 'Продукция',
          header: false,
        }, {
          id: 'b',
          text: 'Параметры',
          header: false,
        }],
        offsets: {top: 0, right: 0, bottom: 0, left: 0},
      });

      // добавляем табчасть продукции
      this.meta_production = $p.dp.buyers_order.metadata('production').fields._clone();
      elmnts.grids.production = elmnts.layout.cells('a').attachTabular({
        metadata: this.meta_production,
        obj: dp,
        ts: 'production',
        pwnd: wnd,
      });

      // добавляем табчасть пареметров
      elmnts.grids.params = elmnts.layout.cells('b').attachHeadFields({
        obj: dp,
        ts: 'product_params',
        pwnd: wnd,
        selection: {elm: -1},
        oxml: {'Параметры продукции': []},
      });

      const height = elmnts.layout.cells('a').getHeight() + elmnts.layout.cells('b').getHeight();
      elmnts.layout.cells('a').setHeight(height * 0.7);

    }

    // команды формы
    toolbar_click(btn_id) {
      if(btn_id == 'btn_ok') {
        this.dp._data._modified = false;
        this.dp.calc_order.process_add_product_list(this.dp)
          .then(() => {
            this.wnd.close();
            this.wnd = this.dp = this.attr = null;
          })
          .catch(() => null);
      }
    }

    refill_prms() {
      const {meta_production, wnd} = this;
      const {production, params} = wnd.elmnts.grids;
      if(production && params) {
        const row = production.get_cell_field();
        if(row) {
          params.selection = {elm: row.obj.row};
          if(!row.obj.inset.empty()) {
            $p.cat.clrs.selection_exclude_service(meta_production.clr, row.obj.inset);
          }
        }
      }
    }
  }

  $p.dp.buyers_order.open_product_list = function (wnd, o) {
    return new CalcOrderFormProductList(wnd, o);
  };
});


/***/ }),

/***/ 1189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n_ru__ = __webpack_require__(1190);
// общие модули

// строки интернационализации


/* harmony default export */ __webpack_exports__["a"] = (function ($p) {
  Object(__WEBPACK_IMPORTED_MODULE_0__i18n_ru__["a" /* default */])($p);
});


/***/ }),

/***/ 1190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Строковые константы интернационализации
 */

/* harmony default export */ __webpack_exports__["a"] = (function ($p) {

  Object.assign($p.msg, {
    main_title: 'Окнософт: заказ дилера ',
    additional_inserts: 'Доп. вставки',
    align_node_right: 'Уравнять вертикально вправо',
    align_node_bottom: 'Уравнять горизонтально вниз',
    align_node_top: 'Уравнять горизонтально вверх',
    align_node_left: 'Уравнять вертикально влево',
    align_set_right: 'Установить размер сдвигом правых элементов',
    align_set_bottom: 'Установить размер сдвигом нижних элементов',
    align_set_top: 'Установить размер сдвигом верхних элементов',
    align_set_left: 'Установить размер сдвигом левых элементов',
    align_all: 'Установить прямые углы или уравнять по заполнениям',
    align_invalid_direction: 'Неприменимо для элемента с данной ориентацией',

    arc_invalid_elm: 'Укажите профиль на эскизе',

    bld_constructor: 'Конструктор объектов графического построителя',
    bld_title: 'Графический построитель',
    bld_empty_param: 'Не заполнен обязательный параметр <br />',
    bld_not_product: 'В текущей строке нет изделия построителя',
    bld_not_draw: 'Отсутствует эскиз или не указана система профилей',
    bld_not_sys: 'Не указана система профилей',
    bld_from_blocks_title: 'Выбор типового блока',
    bld_from_blocks: 'Текущее изделие будет заменено конфигурацией типового блока. Продолжить?',
    bld_split_imp: 'В параметрах продукции<br />\'%1\'<br />запрещены незамкнутые контуры<br />Для включения деления импостом,' +
    '<br />установите это свойство в \'Истина\'',

    bld_new_stv: 'Добавить створку',
    bld_new_stv_no_filling: 'Перед добавлением створки, укажите заполнение,<br />в которое поместить створку',
    bld_arc: 'Радиус сегмента профиля',

    del_elm: 'Удалить элемент',

    err_no_cnn: 'не найдено соединение',
    err_seam_len: 'длина шва',

    glass_spec: 'Состав заполнения',
    glass_invalid_elm: 'Укажите заполнение на эскизе',

    to_contour: 'в контур',
    to_elm: 'в элемент',
    to_product: 'в изделие',

    ruler_elm: 'Расстояние между элементами',
    ruler_node: 'Расстояние между узлами',
    ruler_new_line: 'Добавить размерную линию',

    ruler_base: 'По опорным линиям',
    ruler_inner: 'По внутренним линиям',
    ruler_outer: 'По внешним линиям',

    show_not_implemented: function () {
      this.show_msg({
        type: 'alert-warning',
        text: this.not_implemented,
        title: this.main_title
      });
    },

  });
});




/***/ }),

/***/ 1191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * ### Слушатель события экспорта в dxf
 * Created by Evgeniy Malyarov on 24.11.2017.
 *//* harmony default export */ __webpack_exports__["a"] = (function($p){$p.md.on('dxf',function(scheme){//import('@jscad/openjscad')
__webpack_require__.e/* import() */(8).then(__webpack_require__.bind(null, 1192)).then(function(jscad){return __webpack_require__.e/* import() */(12).then(__webpack_require__.bind(null, 1200)).then(function(_ref){var exec_dxf=_ref.exec_dxf;return exec_dxf(scheme,jscad);});});});});

/***/ })

});
//# sourceMappingURL=0.0fdb9185.chunk.js.map