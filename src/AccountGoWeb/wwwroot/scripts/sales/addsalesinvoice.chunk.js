webpackJsonp([4],{

/***/ 0:
/*!********************************************************!*\
  !*** ./wwwroot/libs/tsxbuild/sales/addsalesinvoice.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(/*! react */ 1);
	var ReactDOM = __webpack_require__(/*! react-dom */ 38);
	var mobx_react_1 = __webpack_require__(/*! mobx-react */ 168);
	var SelectCustomer_1 = __webpack_require__(/*! ../Shared/Components/SelectCustomer */ 180);
	var SelectPaymentTerm_1 = __webpack_require__(/*! ../Shared/Components/SelectPaymentTerm */ 171);
	var SelectLineItem_1 = __webpack_require__(/*! ../Shared/Components/SelectLineItem */ 172);
	var SelectLineMeasurement_1 = __webpack_require__(/*! ../Shared/Components/SelectLineMeasurement */ 173);
	var SalesInvoiceStore_1 = __webpack_require__(/*! ../Shared/Stores/Sales/SalesInvoiceStore */ 205);
	var store = new SalesInvoiceStore_1.default();
	var SaveInvoiceButton = (function (_super) {
	    __extends(SaveInvoiceButton, _super);
	    function SaveInvoiceButton() {
	        _super.apply(this, arguments);
	    }
	    SaveInvoiceButton.prototype.saveNewSalesInvoice = function (e) {
	    };
	    SaveInvoiceButton.prototype.render = function () {
	        return (React.createElement("input", {type: "button", value: "Save", onClick: this.saveNewSalesInvoice.bind(this)}));
	    };
	    return SaveInvoiceButton;
	}(React.Component));
	var CancelInvoiceButton = (function (_super) {
	    __extends(CancelInvoiceButton, _super);
	    function CancelInvoiceButton() {
	        _super.apply(this, arguments);
	    }
	    CancelInvoiceButton.prototype.render = function () {
	        return (React.createElement("input", {type: "button", value: "Cancel"}));
	    };
	    return CancelInvoiceButton;
	}(React.Component));
	var SalesInvoiceHeader = (function (_super) {
	    __extends(SalesInvoiceHeader, _super);
	    function SalesInvoiceHeader() {
	        _super.apply(this, arguments);
	    }
	    SalesInvoiceHeader.prototype.onChangeInvoiceDate = function (e) {
	        store.changedInvoiceDate(e.target.value);
	    };
	    SalesInvoiceHeader.prototype.render = function () {
	        return (React.createElement("div", null, React.createElement("div", null, React.createElement("label", null, "Customer: "), React.createElement(SelectCustomer_1.default, {store: store}), store.salesInvoice.customerId), React.createElement("div", null, React.createElement("label", null, "Invoice Date: "), React.createElement("input", {type: "date", onChange: this.onChangeInvoiceDate.bind(this), defaultValue: store.salesInvoice.invoiceDate})), React.createElement("div", null, React.createElement("label", null, "Payment Term: "), React.createElement(SelectPaymentTerm_1.default, null)), React.createElement("div", null, React.createElement("label", null, "Reference No: "), React.createElement("input", {type: "text"}))));
	    };
	    SalesInvoiceHeader = __decorate([
	        mobx_react_1.observer
	    ], SalesInvoiceHeader);
	    return SalesInvoiceHeader;
	}(React.Component));
	var SalesInvoiceLines = (function (_super) {
	    __extends(SalesInvoiceLines, _super);
	    function SalesInvoiceLines() {
	        _super.apply(this, arguments);
	    }
	    SalesInvoiceLines.prototype.addLineItem = function () {
	        var itemId, measurementId, quantity, amount, discount;
	        itemId = document.getElementById("optNewItemId").value;
	        measurementId = document.getElementById("optNewMeasurementId").value;
	        quantity = document.getElementById("txtNewQuantity").value;
	        amount = document.getElementById("txtNewAmount").value;
	        discount = document.getElementById("txtNewDiscount").value;
	        console.log("itemId: " + itemId + " | measurementId: " + measurementId + " | quantity: " + quantity + " | amount: " + amount + " | discount: " + discount);
	        store.addLineItem(itemId, measurementId, quantity, amount, discount);
	        document.getElementById("txtNewQuantity").value = "1";
	        document.getElementById("txtNewAmount").value = "0";
	        document.getElementById("txtNewDiscount").value = "0";
	    };
	    SalesInvoiceLines.prototype.onClickRemoveLineItem = function (e) {
	        store.removeLineItem(e.target.name);
	    };
	    SalesInvoiceLines.prototype.onChangeQuantity = function (e) {
	        store.updateLineItem(e.target.name, "quantity", e.target.value);
	    };
	    SalesInvoiceLines.prototype.onChangeAmount = function (e) {
	        store.updateLineItem(e.target.name, "amount", e.target.value);
	    };
	    SalesInvoiceLines.prototype.onChangeDiscount = function (e) {
	        store.updateLineItem(e.target.name, "discount", e.target.value);
	    };
	    SalesInvoiceLines.prototype.render = function () {
	        var lineItems = [];
	        for (var i = 0; i < store.salesInvoice.salesInvoiceLines.length; i++) {
	            lineItems.push(React.createElement("tr", {key: i}, React.createElement("td", null, React.createElement(SelectLineItem_1.default, {store: store, row: i, selected: store.salesInvoice.salesInvoiceLines[i].itemId})), React.createElement("td", null, store.salesInvoice.salesInvoiceLines[i].itemId), React.createElement("td", null, React.createElement(SelectLineMeasurement_1.default, {row: i, store: store, selected: store.salesInvoice.salesInvoiceLines[i].measurementId}), store.salesInvoice.salesInvoiceLines[i].measurementId), React.createElement("td", null, React.createElement("input", {type: "text", name: i, value: store.salesInvoice.salesInvoiceLines[i].quantity, onChange: this.onChangeQuantity.bind(this)})), React.createElement("td", null, React.createElement("input", {type: "text", name: i, value: store.salesInvoice.salesInvoiceLines[i].amount, onChange: this.onChangeAmount.bind(this)})), React.createElement("td", null, React.createElement("input", {type: "text", name: i, value: store.salesInvoice.salesInvoiceLines[i].discount, onChange: this.onChangeDiscount.bind(this)})), React.createElement("td", null, store.lineTotal(i)), React.createElement("td", null, React.createElement("input", {type: "button", name: i, value: "Remove", onClick: this.onClickRemoveLineItem.bind(this)}))));
	        }
	        return (React.createElement("div", null, React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("td", null, "Item Id"), React.createElement("td", null, "Item Name"), React.createElement("td", null, "Measurement"), React.createElement("td", null, "Quantity"), React.createElement("td", null, "Amount"), React.createElement("td", null, "Discount"), React.createElement("td", null, "Line Total"), React.createElement("td", null))), React.createElement("tbody", null, lineItems, React.createElement("tr", null, React.createElement("td", null, React.createElement(SelectLineItem_1.default, {store: store, controlId: "optNewItemId"})), React.createElement("td", null, "Item Name"), React.createElement("td", null, React.createElement(SelectLineMeasurement_1.default, {store: store, controlId: "optNewMeasurementId"})), React.createElement("td", null, React.createElement("input", {type: "text", id: "txtNewQuantity"})), React.createElement("td", null, React.createElement("input", {type: "text", id: "txtNewAmount"})), React.createElement("td", null, React.createElement("input", {type: "text", id: "txtNewDiscount"})), React.createElement("td", null), React.createElement("td", null, React.createElement("input", {type: "button", value: "Add", onClick: this.addLineItem})))), React.createElement("tfoot", null, React.createElement("tr", null, React.createElement("td", {colSpan: "8"}, "Count: ", store.salesInvoice.salesInvoiceLines.length))))));
	    };
	    SalesInvoiceLines = __decorate([
	        mobx_react_1.observer
	    ], SalesInvoiceLines);
	    return SalesInvoiceLines;
	}(React.Component));
	var SalesInvoiceTotals = (function (_super) {
	    __extends(SalesInvoiceTotals, _super);
	    function SalesInvoiceTotals() {
	        _super.apply(this, arguments);
	    }
	    SalesInvoiceTotals.prototype.render = function () {
	        return (React.createElement("div", null, React.createElement("div", null, React.createElement("label", null, "Running Total: ")), React.createElement("div", null, React.createElement("label", null, "Tax Total: ")), React.createElement("div", null, React.createElement("label", null, "Grand Total: "), " ", store.grandTotal())));
	    };
	    SalesInvoiceTotals = __decorate([
	        mobx_react_1.observer
	    ], SalesInvoiceTotals);
	    return SalesInvoiceTotals;
	}(React.Component));
	var AddSalesInvoice = (function (_super) {
	    __extends(AddSalesInvoice, _super);
	    function AddSalesInvoice() {
	        _super.apply(this, arguments);
	    }
	    AddSalesInvoice.prototype.render = function () {
	        return (React.createElement("div", null, React.createElement("div", null, React.createElement(SalesInvoiceHeader, null)), React.createElement("hr", null), React.createElement("div", null, React.createElement(SalesInvoiceLines, null)), React.createElement("hr", null), React.createElement("div", null, React.createElement(SalesInvoiceTotals, null)), React.createElement("hr", null), React.createElement("div", null, React.createElement(SaveInvoiceButton, null), React.createElement(CancelInvoiceButton, null))));
	    };
	    return AddSalesInvoice;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = AddSalesInvoice;
	ReactDOM.render(React.createElement(AddSalesInvoice, null), document.getElementById("divAddSalesInvoice"));
	//# sourceMappingURL=AddSalesInvoice.js.map

/***/ },

/***/ 168:
/*!*******************************!*\
  !*** ./~/mobx-react/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	(function() {
	    function mrFactory(mobx, React, ReactDOM) {
	        if (!mobx)
	            throw new Error("mobx-react requires the MobX package")
	        if (!React)
	            throw new Error("mobx-react requires React to be available");
	
	        var isDevtoolsEnabled = false;
	
	        // WeakMap<Node, Object>;
	        var componentByNodeRegistery = typeof WeakMap !== "undefined" ? new WeakMap() : undefined;
	        var renderReporter = new EventEmitter();
	        function findDOMNode(component) {
	            if (ReactDOM)
	                return ReactDOM.findDOMNode(component);
	            return null;
	        }
	
	        function reportRendering(component) {
	            var node = findDOMNode(component);
	            if (node)
	                componentByNodeRegistery.set(node, component);
	
	            renderReporter.emit({
	                event: 'render',
	                renderTime: component.__$mobRenderEnd - component.__$mobRenderStart,
	                totalTime: Date.now() - component.__$mobRenderStart,
	                component: component,
	                node: node
	            });
	        }
	
	        var reactiveMixin = {
	            componentWillMount: function() {
	                // Generate friendly name for debugging
	                var name = [
	                    this.displayName || this.name || (this.constructor && (this.constructor.displayName || this.constructor.name)) || "<component>",
	                    "#", this._reactInternalInstance && this._reactInternalInstance._rootNodeID,
	                    ".render()"
	                ].join("");
	
	                var baseRender = this.render.bind(this);
	                var self = this;
	                var reaction = null;
	                var isRenderingPending = false;
	                function initialRender() {
	                    reaction = new mobx.Reaction(name, function() {
	                        if (!isRenderingPending) {
	                            isRenderingPending = true;
	                            if (typeof self.componentWillReact === "function")
	                                self.componentWillReact();
	                            React.Component.prototype.forceUpdate.call(self)
	                        }
	                    });
	                    reactiveRender.$mobx = reaction;
	                    self.render = reactiveRender;
	                    return reactiveRender();
	                }
	
	                function reactiveRender() {
	                    isRenderingPending = false;
	                    var rendering;
	                    reaction.track(function() {
	                        if (isDevtoolsEnabled)
	                            self.__$mobRenderStart = Date.now();
	                        rendering = mobx.extras.allowStateChanges(false, baseRender);
	                        if (isDevtoolsEnabled)
	                            self.__$mobRenderEnd = Date.now();
	                    });
	                    return rendering;
	                }
	
	                this.render = initialRender;
	            },
	
	            componentWillUnmount: function() {
	                this.render.$mobx && this.render.$mobx.dispose();
	                if (isDevtoolsEnabled) {
	                    var node = findDOMNode(this);
	                    if (node) {
	                        componentByNodeRegistery.delete(node);
	                    }
	                    renderReporter.emit({
	                        event: 'destroy',
	                        component: this,
	                        node: node
	                    });
	                }
	            },
	
	            componentDidMount: function() {
	                if (isDevtoolsEnabled)
	                    reportRendering(this);
	            },
	
	            componentDidUpdate: function() {
	                if (isDevtoolsEnabled)
	                    reportRendering(this);
	            },
	
	            shouldComponentUpdate: function(nextProps, nextState) {
	                // TODO: if context changed, return true.., see #18
	                
	                // if props or state did change, but a render was scheduled already, no additional render needs to be scheduled
	                if (this.render.$mobx && this.render.$mobx.isScheduled() === true)
	                    return false;
	                
	                // update on any state changes (as is the default)
	                if (this.state !== nextState)
	                    return true;
	                // update if props are shallowly not equal, inspired by PureRenderMixin
	                var keys = Object.keys(this.props);
	                var key;
	                if (keys.length !== Object.keys(nextProps).length)
	                    return true;
	                for(var i = keys.length -1; i >= 0, key = keys[i]; i--) {
	                    var newValue = nextProps[key];
	                    if (newValue !== this.props[key]) {
	                        return true;
	                    } else if (newValue && typeof newValue === "object" && !mobx.isObservable(newValue)) {
	                        /**
	                         * If the newValue is still the same object, but that object is not observable,
	                         * fallback to the default React behavior: update, because the object *might* have changed.
	                         * If you need the non default behavior, just use the React pure render mixin, as that one
	                         * will work fine with mobx as well, instead of the default implementation of
	                         * observer.
	                         */
	                        return true;
	                    }
	                }
	                return false;
	            }
	        }
	
	        function patch(target, funcName) {
	            var base = target[funcName];
	            var mixinFunc = reactiveMixin[funcName];
	            if (!base) {
	                target[funcName] = mixinFunc;
	            } else {
	                target[funcName] = function() {
	                    base.apply(this, arguments);
	                    mixinFunc.apply(this, arguments);
	                }
	            }
	        }
	
	        function observer(componentClass) {
	            // If it is function but doesn't seem to be a react class constructor,
	            // wrap it to a react class automatically
	            if (
	                typeof componentClass === "function" &&
	                (!componentClass.prototype || !componentClass.prototype.render) &&
	                !componentClass.isReactClass && 
	                !React.Component.isPrototypeOf(componentClass)
	            ) {
	                return observer(React.createClass({
	                    displayName:     componentClass.displayName || componentClass.name,
	                    propTypes:       componentClass.propTypes,
	                    contextTypes:    componentClass.contextTypes,
	                    getDefaultProps: function() { return componentClass.defaultProps; },
	                    render:          function() { return componentClass.call(this, this.props, this.context); }
	                }));
	            }
	
	            if (!componentClass)
	                throw new Error("Please pass a valid component to 'observer'");
	            var target = componentClass.prototype || componentClass;
	
	            [
	                "componentWillMount",
	                "componentWillUnmount",
	                "componentDidMount",
	                "componentDidUpdate"
	            ].forEach(function(funcName) {
	                patch(target, funcName)
	            });
	
	            if (!target.shouldComponentUpdate)
	                target.shouldComponentUpdate = reactiveMixin.shouldComponentUpdate;
	            componentClass.isMobXReactObserver = true;
	            return componentClass;
	        }
	
	        function trackComponents() {
	            if (typeof WeakMap === "undefined")
	                throw new Error("[mobx-react] tracking components is not supported in this browser.");
	            if (!isDevtoolsEnabled)
	                isDevtoolsEnabled = true;
	        }
	
	        function EventEmitter() {
	            this.listeners = [];
	        };
	        EventEmitter.prototype.on = function (cb) {
	            this.listeners.push(cb);
	            var self = this;
	            return function() {
	                var idx = self.listeners.indexOf(cb);
	                if (idx !== -1)
	                    self.listeners.splice(idx, 1);
	            };
	        };
	        EventEmitter.prototype.emit = function(data) {
	            this.listeners.forEach(function (fn) {
	                fn(data);
	            });
	        };
	
	        return ({
	            observer: observer,
	            reactiveComponent: function() {
	                console.warn("[mobx-react] `reactiveComponent` has been renamed to `observer` and will be removed in 1.1.");
	                return observer.apply(null, arguments);
	            },
	            renderReporter: renderReporter,
	            componentByNodeRegistery: componentByNodeRegistery,
	            trackComponents: trackComponents
	        });
	    }
	
	    // UMD
	    if (true) {
	        module.exports = mrFactory(__webpack_require__(/*! mobx */ 169), __webpack_require__(/*! react */ 1), __webpack_require__(/*! react-dom */ 38));
	    } else if (typeof define === 'function' && define.amd) {
	        define('mobx-react', ['mobx', 'react', 'react-dom'], mrFactory);
	    } else {
	        this.mobxReact = mrFactory(this['mobx'], this['React'], this['ReactDOM']);
	    }
	})();


/***/ },

/***/ 169:
/*!****************************!*\
  !*** ./~/mobx/lib/mobx.js ***!
  \****************************/
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	registerGlobals();
	exports.extras = {
	    allowStateChanges: allowStateChanges,
	    getAtom: getAtom,
	    getDebugName: getDebugName,
	    getDependencyTree: getDependencyTree,
	    getObserverTree: getObserverTree,
	    isComputingDerivation: isComputingDerivation,
	    isSpyEnabled: isSpyEnabled,
	    resetGlobalState: resetGlobalState,
	    spyReport: spyReport,
	    spyReportEnd: spyReportEnd,
	    spyReportStart: spyReportStart,
	    trackTransitions: trackTransitions
	};
	exports._ = {
	    getAdministration: getAdministration,
	    quickDiff: quickDiff,
	    resetGlobalState: resetGlobalState
	};
	function autorun(arg1, arg2, arg3) {
	    var name, view, scope;
	    if (typeof arg1 === "string") {
	        name = arg1;
	        view = arg2;
	        scope = arg3;
	    }
	    else if (typeof arg1 === "function") {
	        name = arg1.name || ("Autorun@" + getNextId());
	        view = arg1;
	        scope = arg2;
	    }
	    assertUnwrapped(view, "autorun methods cannot have modifiers");
	    invariant(typeof view === "function", "autorun expects a function");
	    invariant(view.length === 0, "autorun expects a function without arguments");
	    if (scope)
	        view = view.bind(scope);
	    var reaction = new Reaction(name, function () {
	        this.track(view);
	    });
	    reaction.schedule();
	    return reaction.getDisposer();
	}
	exports.autorun = autorun;
	function when(arg1, arg2, arg3, arg4) {
	    var name, predicate, effect, scope;
	    if (typeof arg1 === "string") {
	        name = arg1;
	        predicate = arg2;
	        effect = arg3;
	        scope = arg4;
	    }
	    else if (typeof arg1 === "function") {
	        name = ("When@" + getNextId());
	        predicate = arg1;
	        effect = arg2;
	        scope = arg3;
	    }
	    var disposeImmediately = false;
	    var disposer = autorun(name, function () {
	        if (predicate.call(scope)) {
	            if (disposer)
	                disposer();
	            else
	                disposeImmediately = true;
	            var prevUntracked = untrackedStart();
	            effect.call(scope);
	            untrackedEnd(prevUntracked);
	        }
	    });
	    if (disposeImmediately)
	        disposer();
	    return disposer;
	}
	exports.when = when;
	function autorunUntil(predicate, effect, scope) {
	    deprecated("`autorunUntil` is deprecated, please use `when`.");
	    return when.apply(null, arguments);
	}
	exports.autorunUntil = autorunUntil;
	function autorunAsync(arg1, arg2, arg3, arg4) {
	    var name, func, delay, scope;
	    if (typeof arg1 === "string") {
	        name = arg1;
	        func = arg2;
	        delay = arg3;
	        scope = arg4;
	    }
	    else if (typeof arg1 === "function") {
	        name = arg1.name || ("AutorunAsync@" + getNextId());
	        func = arg1;
	        delay = arg2;
	        scope = arg3;
	    }
	    if (delay === void 0)
	        delay = 1;
	    if (scope)
	        func = func.bind(scope);
	    var isScheduled = false;
	    var r = new Reaction(name, function () {
	        if (!isScheduled) {
	            isScheduled = true;
	            setTimeout(function () {
	                isScheduled = false;
	                if (!r.isDisposed)
	                    r.track(func);
	            }, delay);
	        }
	    });
	    r.schedule();
	    return r.getDisposer();
	}
	exports.autorunAsync = autorunAsync;
	function reaction(arg1, arg2, arg3, arg4, arg5, arg6) {
	    var name, expression, effect, fireImmediately, delay, scope;
	    if (typeof arg1 === "string") {
	        name = arg1;
	        expression = arg2;
	        effect = arg3;
	        fireImmediately = arg4;
	        delay = arg5;
	        scope = arg6;
	    }
	    else {
	        name = arg1.name || arg2.name || ("Reaction@" + getNextId());
	        expression = arg1;
	        effect = arg2;
	        fireImmediately = arg3;
	        delay = arg4;
	        scope = arg5;
	    }
	    if (fireImmediately === void 0)
	        fireImmediately = false;
	    if (delay === void 0)
	        delay = 0;
	    var _a = getValueModeFromValue(expression, ValueMode.Reference), valueMode = _a[0], unwrappedExpression = _a[1];
	    var compareStructural = valueMode === ValueMode.Structure;
	    if (scope) {
	        unwrappedExpression = unwrappedExpression.bind(scope);
	        effect = action(name, effect.bind(scope));
	    }
	    var firstTime = true;
	    var isScheduled = false;
	    var nextValue = undefined;
	    function reactionRunner() {
	        if (r.isDisposed)
	            return;
	        var changed = false;
	        r.track(function () {
	            var v = unwrappedExpression();
	            changed = valueDidChange(compareStructural, nextValue, v);
	            nextValue = v;
	        });
	        if (firstTime && fireImmediately)
	            effect(nextValue);
	        if (!firstTime && changed === true)
	            effect(nextValue);
	        if (firstTime)
	            firstTime = false;
	    }
	    var r = new Reaction(name, function () {
	        if (delay < 1) {
	            reactionRunner();
	        }
	        else if (!isScheduled) {
	            isScheduled = true;
	            setTimeout(function () {
	                isScheduled = false;
	                reactionRunner();
	            }, delay);
	        }
	    });
	    r.schedule();
	    return r.getDisposer();
	}
	exports.reaction = reaction;
	var computedDecorator = createClassPropertyDecorator(function (target, name, _, decoratorArgs, originalDescriptor) {
	    var baseValue = originalDescriptor.get;
	    invariant(typeof baseValue === "function", "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'");
	    var compareStructural = false;
	    if (decoratorArgs && decoratorArgs.length === 1 && decoratorArgs[0].asStructure === true)
	        compareStructural = true;
	    var adm = asObservableObject(target, undefined, ValueMode.Recursive);
	    defineObservableProperty(adm, name, compareStructural ? asStructure(baseValue) : baseValue, false);
	}, function (name) {
	    return this.$mobx.values[name].get();
	}, throwingComputedValueSetter, false, true);
	function computed(targetOrExpr, keyOrScope, baseDescriptor, options) {
	    if (arguments.length < 3 && typeof targetOrExpr === "function")
	        return computedExpr(targetOrExpr, keyOrScope);
	    invariant(!baseDescriptor || !baseDescriptor.set, "@observable properties cannot have a setter: " + keyOrScope);
	    return computedDecorator.apply(null, arguments);
	}
	exports.computed = computed;
	function computedExpr(expr, scope) {
	    var _a = getValueModeFromValue(expr, ValueMode.Recursive), mode = _a[0], value = _a[1];
	    return new ComputedValue(value, scope, mode === ValueMode.Structure, value.name);
	}
	function throwingComputedValueSetter() {
	    throw new Error("[ComputedValue] It is not allowed to assign new values to computed properties.");
	}
	function createTransformer(transformer, onCleanup) {
	    invariant(typeof transformer === "function" && transformer.length === 1, "createTransformer expects a function that accepts one argument");
	    var objectCache = {};
	    var resetId = globalState.resetId;
	    var Transformer = (function (_super) {
	        __extends(Transformer, _super);
	        function Transformer(sourceIdentifier, sourceObject) {
	            _super.call(this, function () { return transformer(sourceObject); }, null, false, "Transformer-" + transformer.name + "-" + sourceIdentifier);
	            this.sourceIdentifier = sourceIdentifier;
	            this.sourceObject = sourceObject;
	        }
	        Transformer.prototype.onBecomeUnobserved = function () {
	            var lastValue = this.value;
	            _super.prototype.onBecomeUnobserved.call(this);
	            delete objectCache[this.sourceIdentifier];
	            if (onCleanup)
	                onCleanup(lastValue, this.sourceObject);
	        };
	        return Transformer;
	    }(ComputedValue));
	    return function (object) {
	        if (resetId !== globalState.resetId) {
	            objectCache = {};
	            resetId = globalState.resetId;
	        }
	        var identifier = getMemoizationId(object);
	        var reactiveTransformer = objectCache[identifier];
	        if (reactiveTransformer)
	            return reactiveTransformer.get();
	        reactiveTransformer = objectCache[identifier] = new Transformer(identifier, object);
	        return reactiveTransformer.get();
	    };
	}
	exports.createTransformer = createTransformer;
	function getMemoizationId(object) {
	    if (object === null || typeof object !== "object")
	        throw new Error("[mobx] transform expected some kind of object, got: " + object);
	    var tid = object.$transformId;
	    if (tid === undefined) {
	        tid = getNextId();
	        Object.defineProperty(object, "$transformId", {
	            configurable: true,
	            writable: true,
	            enumerable: false,
	            value: tid
	        });
	    }
	    return tid;
	}
	function expr(expr, scope) {
	    if (!isComputingDerivation())
	        console.warn("[mobx.expr] 'expr' should only be used inside other reactive functions.");
	    return computed(expr, scope).get();
	}
	exports.expr = expr;
	function extendObservable(target) {
	    var properties = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        properties[_i - 1] = arguments[_i];
	    }
	    invariant(arguments.length >= 2, "extendObservable expected 2 or more arguments");
	    invariant(typeof target === "object", "extendObservable expects an object as first argument");
	    invariant(!(target instanceof ObservableMap), "extendObservable should not be used on maps, use map.merge instead");
	    properties.forEach(function (propSet) {
	        invariant(typeof propSet === "object", "all arguments of extendObservable should be objects");
	        extendObservableHelper(target, propSet, ValueMode.Recursive, null);
	    });
	    return target;
	}
	exports.extendObservable = extendObservable;
	function extendObservableHelper(target, properties, mode, name) {
	    var adm = asObservableObject(target, name, mode);
	    for (var key in properties)
	        if (properties.hasOwnProperty(key)) {
	            if (target === properties && !isPropertyConfigurable(target, key))
	                continue;
	            setObservableObjectInstanceProperty(adm, key, properties[key]);
	        }
	    return target;
	}
	function getDependencyTree(thing, property) {
	    return nodeToDependencyTree(getAtom(thing, property));
	}
	function nodeToDependencyTree(node) {
	    var result = {
	        name: node.name
	    };
	    if (node.observing && node.observing.length)
	        result.dependencies = unique(node.observing).map(nodeToDependencyTree);
	    return result;
	}
	function getObserverTree(thing, property) {
	    return nodeToObserverTree(getAtom(thing, property));
	}
	function nodeToObserverTree(node) {
	    var result = {
	        name: node.name
	    };
	    if (node.observers && node.observers.length)
	        result.observers = unique(node.observers).map(nodeToObserverTree);
	    return result;
	}
	function intercept(thing, propOrHandler, handler) {
	    if (typeof handler === "function")
	        return interceptProperty(thing, propOrHandler, handler);
	    else
	        return interceptInterceptable(thing, propOrHandler);
	}
	exports.intercept = intercept;
	function interceptInterceptable(thing, handler) {
	    if (isPlainObject(thing) && !isObservableObject(thing)) {
	        deprecated("Passing plain objects to intercept / observe is deprecated and will be removed in 3.0");
	        return getAdministration(observable(thing)).intercept(handler);
	    }
	    return getAdministration(thing).intercept(handler);
	}
	function interceptProperty(thing, property, handler) {
	    if (isPlainObject(thing) && !isObservableObject(thing)) {
	        deprecated("Passing plain objects to intercept / observe is deprecated and will be removed in 3.0");
	        extendObservable(thing, {
	            property: thing[property]
	        });
	        return interceptProperty(thing, property, handler);
	    }
	    return getAdministration(thing, property).intercept(handler);
	}
	function isObservable(value, property) {
	    if (value === null || value === undefined)
	        return false;
	    if (property !== undefined) {
	        if (value instanceof ObservableMap || value instanceof ObservableArray)
	            throw new Error("[mobx.isObservable] isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
	        else if (isObservableObject(value)) {
	            var o = value.$mobx;
	            return o.values && !!o.values[property];
	        }
	        return false;
	    }
	    return !!value.$mobx || value instanceof Atom || value instanceof Reaction || value instanceof ComputedValue;
	}
	exports.isObservable = isObservable;
	var decoratorImpl = createClassPropertyDecorator(function (target, name, baseValue) {
	    var prevA = allowStateChangesStart(true);
	    if (typeof baseValue === "function")
	        baseValue = asReference(baseValue);
	    var adm = asObservableObject(target, undefined, ValueMode.Recursive);
	    defineObservableProperty(adm, name, baseValue, false);
	    allowStateChangesEnd(prevA);
	}, function (name) {
	    return this.$mobx.values[name].get();
	}, function (name, value) {
	    setPropertyValue(this, name, value);
	}, true, false);
	function observableDecorator(target, key, baseDescriptor) {
	    invariant(arguments.length >= 2 && arguments.length <= 3, "Illegal decorator config", key);
	    assertPropertyConfigurable(target, key);
	    invariant(!baseDescriptor || !baseDescriptor.get, "@observable can not be used on getters, use @computed instead");
	    return decoratorImpl.apply(null, arguments);
	}
	function observable(v, keyOrScope) {
	    if (v === void 0) { v = undefined; }
	    if (typeof arguments[1] === "string")
	        return observableDecorator.apply(null, arguments);
	    invariant(arguments.length < 3, "observable expects zero, one or two arguments");
	    if (isObservable(v))
	        return v;
	    var _a = getValueModeFromValue(v, ValueMode.Recursive), mode = _a[0], value = _a[1];
	    var sourceType = mode === ValueMode.Reference ? ValueType.Reference : getTypeOfValue(value);
	    switch (sourceType) {
	        case ValueType.Array:
	        case ValueType.PlainObject:
	            return makeChildObservable(value, mode);
	        case ValueType.Reference:
	        case ValueType.ComplexObject:
	            return new ObservableValue(value, mode);
	        case ValueType.ComplexFunction:
	            throw new Error("[mobx.observable] To be able to make a function reactive it should not have arguments. If you need an observable reference to a function, use `observable(asReference(f))`");
	        case ValueType.ViewFunction:
	            deprecated("Use `computed(expr)` instead of `observable(expr)`");
	            return computed(v, keyOrScope);
	    }
	    invariant(false, "Illegal State");
	}
	exports.observable = observable;
	var ValueType;
	(function (ValueType) {
	    ValueType[ValueType["Reference"] = 0] = "Reference";
	    ValueType[ValueType["PlainObject"] = 1] = "PlainObject";
	    ValueType[ValueType["ComplexObject"] = 2] = "ComplexObject";
	    ValueType[ValueType["Array"] = 3] = "Array";
	    ValueType[ValueType["ViewFunction"] = 4] = "ViewFunction";
	    ValueType[ValueType["ComplexFunction"] = 5] = "ComplexFunction";
	})(ValueType || (ValueType = {}));
	function getTypeOfValue(value) {
	    if (value === null || value === undefined)
	        return ValueType.Reference;
	    if (typeof value === "function")
	        return value.length ? ValueType.ComplexFunction : ValueType.ViewFunction;
	    if (Array.isArray(value) || value instanceof ObservableArray)
	        return ValueType.Array;
	    if (typeof value === "object")
	        return isPlainObject(value) ? ValueType.PlainObject : ValueType.ComplexObject;
	    return ValueType.Reference;
	}
	function observe(thing, propOrCb, cbOrFire, fireImmediately) {
	    if (typeof cbOrFire === "function")
	        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
	    else
	        return observeObservable(thing, propOrCb, cbOrFire);
	}
	exports.observe = observe;
	function observeObservable(thing, listener, fireImmediately) {
	    if (isPlainObject(thing) && !isObservableObject(thing)) {
	        deprecated("Passing plain objects to intercept / observe is deprecated and will be removed in 3.0");
	        return getAdministration(observable(thing)).observe(listener, fireImmediately);
	    }
	    return getAdministration(thing).observe(listener, fireImmediately);
	}
	function observeObservableProperty(thing, property, listener, fireImmediately) {
	    if (isPlainObject(thing) && !isObservableObject(thing)) {
	        deprecated("Passing plain objects to intercept / observe is deprecated and will be removed in 3.0");
	        extendObservable(thing, {
	            property: thing[property]
	        });
	        return observeObservableProperty(thing, property, listener, fireImmediately);
	    }
	    return getAdministration(thing, property).observe(listener, fireImmediately);
	}
	function toJS(source, detectCycles, __alreadySeen) {
	    if (detectCycles === void 0) { detectCycles = true; }
	    if (__alreadySeen === void 0) { __alreadySeen = null; }
	    function cache(value) {
	        if (detectCycles)
	            __alreadySeen.push([source, value]);
	        return value;
	    }
	    if (detectCycles && __alreadySeen === null)
	        __alreadySeen = [];
	    if (detectCycles && source !== null && typeof source === "object") {
	        for (var i = 0, l = __alreadySeen.length; i < l; i++)
	            if (__alreadySeen[i][0] === source)
	                return __alreadySeen[i][1];
	    }
	    if (!source)
	        return source;
	    if (Array.isArray(source) || source instanceof ObservableArray) {
	        var res = cache([]);
	        var toAdd = source.map(function (value) { return toJS(value, detectCycles, __alreadySeen); });
	        res.length = toAdd.length;
	        for (var i = 0, l = toAdd.length; i < l; i++)
	            res[i] = toAdd[i];
	        return res;
	    }
	    if (source instanceof ObservableMap) {
	        var res_1 = cache({});
	        source.forEach(function (value, key) { return res_1[key] = toJS(value, detectCycles, __alreadySeen); });
	        return res_1;
	    }
	    if (isObservable(source) && source.$mobx instanceof ObservableValue)
	        return toJS(source(), detectCycles, __alreadySeen);
	    if (source instanceof ObservableValue)
	        return toJS(source.get(), detectCycles, __alreadySeen);
	    if (typeof source === "object") {
	        var res = cache({});
	        for (var key in source)
	            res[key] = toJS(source[key], detectCycles, __alreadySeen);
	        return res;
	    }
	    return source;
	}
	exports.toJS = toJS;
	function toJSON(source, detectCycles, __alreadySeen) {
	    if (detectCycles === void 0) { detectCycles = true; }
	    if (__alreadySeen === void 0) { __alreadySeen = null; }
	    deprecated("toJSON is deprecated. Use toJS instead");
	    return toJS.apply(null, arguments);
	}
	exports.toJSON = toJSON;
	function log(msg) {
	    console.log(msg);
	    return msg;
	}
	function whyRun(thing, prop) {
	    switch (arguments.length) {
	        case 0:
	            thing = globalState.derivationStack[globalState.derivationStack.length - 1];
	            if (!thing)
	                return log("whyRun() can only be used if a derivation is active, or by passing an computed value / reaction explicitly. If you invoked whyRun from inside a computation; the computation is currently suspended but re-evaluating because somebody requested it's value.");
	            break;
	        case 2:
	            thing = getAtom(thing, prop);
	            break;
	    }
	    thing = getAtom(thing);
	    if (thing instanceof ComputedValue)
	        return log(thing.whyRun());
	    else if (thing instanceof Reaction)
	        return log(thing.whyRun());
	    else
	        invariant(false, "whyRun can only be used on reactions and computed values");
	}
	exports.whyRun = whyRun;
	var actionDecorator = createClassPropertyDecorator(function (target, key, value, args, originalDescriptor) {
	    var actionName = (args && args.length === 1) ? args[0] : (value.name || key || "<unnamed action>");
	    var wrappedAction = action(actionName, value);
	    if (originalDescriptor && originalDescriptor.value && target.constructor && target.constructor.prototype) {
	        Object.defineProperty(target.constructor.prototype, key, {
	            configurable: true, enumerable: false, writable: false,
	            value: wrappedAction
	        });
	    }
	    else {
	        Object.defineProperty(target, key, {
	            configurable: true, enumerable: false, writable: false,
	            value: wrappedAction
	        });
	    }
	}, function (key) {
	    return this[key];
	}, function () {
	    invariant(false, "It is not allowed to assign new values to @action fields");
	}, false, true);
	function action(arg1, arg2, arg3, arg4) {
	    if (arguments.length === 1 && typeof arg1 === "function")
	        return actionImplementation(arg1.name || "<unnamed action>", arg1);
	    if (arguments.length === 2 && typeof arg2 === "function")
	        return actionImplementation(arg1, arg2);
	    return actionDecorator.apply(null, arguments);
	}
	exports.action = action;
	function isAction(thing) {
	    return typeof thing === "function" && thing.isMobxAction === true;
	}
	exports.isAction = isAction;
	function runInAction(arg1, arg2, arg3) {
	    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
	    var fn = typeof arg1 === "function" ? arg1 : arg2;
	    var scope = typeof arg1 === "function" ? arg2 : arg3;
	    invariant(typeof fn === "function", "`runInAction` expects a function");
	    invariant(fn.length === 0, "`runInAction` expects a function without arguments");
	    invariant(typeof actionName === "string" && actionName.length > 0, "actions should have valid names, got: '" + actionName + "'");
	    return executeWrapped(actionName, fn, scope, undefined);
	}
	exports.runInAction = runInAction;
	function actionImplementation(actionName, fn) {
	    invariant(typeof fn === "function", "`action` can only be invoked on functions");
	    invariant(typeof actionName === "string" && actionName.length > 0, "actions should have valid names, got: '" + actionName + "'");
	    var res = function () {
	        return executeWrapped(actionName, fn, this, arguments);
	    };
	    res.isMobxAction = true;
	    return res;
	}
	function executeWrapped(actionName, fn, scope, args) {
	    var ds = globalState.derivationStack;
	    invariant(!(ds[ds.length - 1] instanceof ComputedValue), "Computed values or transformers should not invoke actions or trigger other side effects");
	    var notifySpy = isSpyEnabled();
	    var startTime;
	    if (notifySpy) {
	        startTime = Date.now();
	        var flattendArgs = [];
	        for (var i = 0, l = args.length; i < l; i++)
	            flattendArgs.push(args[i]);
	        spyReportStart({
	            type: "action",
	            name: actionName,
	            fn: fn,
	            target: scope,
	            arguments: flattendArgs
	        });
	    }
	    var prevUntracked = untrackedStart();
	    transactionStart(actionName, scope, false);
	    var prevAllowStateChanges = allowStateChangesStart(true);
	    try {
	        return fn.apply(scope, args);
	    }
	    finally {
	        allowStateChangesEnd(prevAllowStateChanges);
	        transactionEnd(false);
	        untrackedEnd(prevUntracked);
	        if (notifySpy)
	            spyReportEnd({ time: Date.now() - startTime });
	    }
	}
	function useStrict(strict) {
	    invariant(globalState.derivationStack.length === 0, "It is not allowed to set `useStrict` when a derivation is running");
	    globalState.strictMode = strict;
	    globalState.allowStateChanges = !strict;
	}
	exports.useStrict = useStrict;
	function allowStateChanges(allowStateChanges, func) {
	    var prev = allowStateChangesStart(allowStateChanges);
	    var res = func();
	    allowStateChangesEnd(prev);
	    return res;
	}
	function allowStateChangesStart(allowStateChanges) {
	    var prev = globalState.allowStateChanges;
	    globalState.allowStateChanges = allowStateChanges;
	    return prev;
	}
	function allowStateChangesEnd(prev) {
	    globalState.allowStateChanges = prev;
	}
	function propagateAtomReady(atom) {
	    invariant(atom.isDirty, "atom not dirty");
	    atom.isDirty = false;
	    propagateReadiness(atom, true);
	}
	var Atom = (function () {
	    function Atom(name, onBecomeObserved, onBecomeUnobserved) {
	        if (name === void 0) { name = "Atom@" + getNextId(); }
	        if (onBecomeObserved === void 0) { onBecomeObserved = noop; }
	        if (onBecomeUnobserved === void 0) { onBecomeUnobserved = noop; }
	        this.name = name;
	        this.onBecomeObserved = onBecomeObserved;
	        this.onBecomeUnobserved = onBecomeUnobserved;
	        this.isDirty = false;
	        this.staleObservers = [];
	        this.observers = [];
	    }
	    Atom.prototype.reportObserved = function () {
	        reportObserved(this);
	    };
	    Atom.prototype.reportChanged = function () {
	        if (!this.isDirty) {
	            this.reportStale();
	            this.reportReady();
	        }
	    };
	    Atom.prototype.reportStale = function () {
	        if (!this.isDirty) {
	            this.isDirty = true;
	            propagateStaleness(this);
	        }
	    };
	    Atom.prototype.reportReady = function () {
	        invariant(this.isDirty, "atom not dirty");
	        if (globalState.inTransaction > 0)
	            globalState.changedAtoms.push(this);
	        else {
	            propagateAtomReady(this);
	            runReactions();
	        }
	    };
	    Atom.prototype.toString = function () {
	        return this.name;
	    };
	    return Atom;
	}());
	exports.Atom = Atom;
	var ComputedValue = (function () {
	    function ComputedValue(derivation, scope, compareStructural, name) {
	        this.derivation = derivation;
	        this.scope = scope;
	        this.compareStructural = compareStructural;
	        this.isLazy = true;
	        this.isComputing = false;
	        this.staleObservers = [];
	        this.observers = [];
	        this.observing = [];
	        this.dependencyChangeCount = 0;
	        this.dependencyStaleCount = 0;
	        this.value = undefined;
	        this.name = name || "ComputedValue@" + getNextId();
	    }
	    ComputedValue.prototype.peek = function () {
	        this.isComputing = true;
	        var prevAllowStateChanges = allowStateChangesStart(false);
	        var res = this.derivation.call(this.scope);
	        allowStateChangesEnd(prevAllowStateChanges);
	        this.isComputing = false;
	        return res;
	    };
	    ;
	    ComputedValue.prototype.onBecomeObserved = function () {
	    };
	    ComputedValue.prototype.onBecomeUnobserved = function () {
	        for (var i = 0, l = this.observing.length; i < l; i++)
	            removeObserver(this.observing[i], this);
	        this.observing = [];
	        this.isLazy = true;
	        this.value = undefined;
	    };
	    ComputedValue.prototype.onDependenciesReady = function () {
	        var changed = this.trackAndCompute();
	        return changed;
	    };
	    ComputedValue.prototype.get = function () {
	        invariant(!this.isComputing, "Cycle detected", this.derivation);
	        reportObserved(this);
	        if (this.dependencyStaleCount > 0) {
	            return this.peek();
	        }
	        if (this.isLazy) {
	            if (isComputingDerivation()) {
	                this.isLazy = false;
	                this.trackAndCompute();
	            }
	            else {
	                return this.peek();
	            }
	        }
	        return this.value;
	    };
	    ComputedValue.prototype.set = function (_) {
	        throw new Error("[ComputedValue '" + name + "'] It is not possible to assign a new value to a computed value.");
	    };
	    ComputedValue.prototype.trackAndCompute = function () {
	        if (isSpyEnabled()) {
	            spyReport({
	                object: this,
	                type: "compute",
	                fn: this.derivation,
	                target: this.scope
	            });
	        }
	        var oldValue = this.value;
	        var newValue = this.value = trackDerivedFunction(this, this.peek);
	        return valueDidChange(this.compareStructural, newValue, oldValue);
	    };
	    ComputedValue.prototype.observe = function (listener, fireImmediately) {
	        var _this = this;
	        var firstTime = true;
	        var prevValue = undefined;
	        return autorun(function () {
	            var newValue = _this.get();
	            if (!firstTime || fireImmediately) {
	                var prevU = untrackedStart();
	                listener(newValue, prevValue);
	                untrackedEnd(prevU);
	            }
	            firstTime = false;
	            prevValue = newValue;
	        });
	    };
	    ComputedValue.prototype.toJSON = function () {
	        return this.get();
	    };
	    ComputedValue.prototype.toString = function () {
	        return this.name + "[" + this.derivation.toString() + "]";
	    };
	    ComputedValue.prototype.whyRun = function () {
	        var isTracking = globalState.derivationStack.length > 0;
	        var observing = unique(this.observing).map(function (dep) { return dep.name; });
	        var observers = unique(this.observers).map(function (dep) { return dep.name; });
	        var runReason = (this.isComputing
	            ? isTracking
	                ? this.observers.length > 0
	                    ? RunReason.INVALIDATED
	                    : RunReason.REQUIRED
	                : RunReason.PEEK
	            : RunReason.NOT_RUNNING);
	        if (runReason === RunReason.REQUIRED) {
	            var requiredBy = globalState.derivationStack[globalState.derivationStack.length - 2];
	            if (requiredBy)
	                observers.push(requiredBy.name);
	        }
	        return (("\nWhyRun? computation '" + this.name + "':\n * Running because: " + runReasonTexts[runReason] + " " + ((runReason === RunReason.NOT_RUNNING) && this.dependencyStaleCount > 0 ? "(a next run is scheduled)" : "") + "\n") +
	            (this.isLazy
	                ?
	                    " * This computation is suspended (not in use by any reaction) and won't run automatically.\n\tDidn't expect this computation to be suspended at this point?\n\t  1. Make sure this computation is used by a reaction (reaction, autorun, observer).\n\t  2. Check whether you are using this computation synchronously (in the same stack as they reaction that needs it).\n"
	                :
	                    " * This computation will re-run if any of the following observables changes:\n    " + joinStrings(observing) + "\n    " + ((this.isComputing && isTracking) ? " (... or any observable accessed during the remainder of the current run)" : "") + "\n\tMissing items in this list?\n\t  1. Check whether all used values are properly marked as observable (use isObservable to verify)\n\t  2. Make sure you didn't dereference values too early. MobX observes props, not primitives. E.g: use 'person.name' instead of 'name' in your computation.\n  * If the outcome of this computation changes, the following observers will be re-run:\n    " + joinStrings(observers) + "\n"));
	    };
	    return ComputedValue;
	}());
	var RunReason;
	(function (RunReason) {
	    RunReason[RunReason["PEEK"] = 0] = "PEEK";
	    RunReason[RunReason["INVALIDATED"] = 1] = "INVALIDATED";
	    RunReason[RunReason["REQUIRED"] = 2] = "REQUIRED";
	    RunReason[RunReason["NOT_RUNNING"] = 3] = "NOT_RUNNING";
	})(RunReason || (RunReason = {}));
	var runReasonTexts = (_a = {},
	    _a[RunReason.PEEK] = "[peek] The value of this computed value was requested outside an reaction",
	    _a[RunReason.INVALIDATED] = "[invalidated] Some observables used by this computation did change",
	    _a[RunReason.REQUIRED] = "[started] This computation is required by another computed value / reaction",
	    _a[RunReason.NOT_RUNNING] = "[idle] This compution is currently not running",
	    _a
	);
	function isComputingDerivation() {
	    return globalState.derivationStack.length > 0;
	}
	function checkIfStateModificationsAreAllowed() {
	    if (!globalState.allowStateChanges) {
	        invariant(false, globalState.strictMode
	            ? "It is not allowed to create or change state outside an `action` when MobX is in strict mode. Wrap the current method in `action` if this state change is intended"
	            : "It is not allowed to change the state when a computed value or transformer is being evaluated. Use 'autorun' to create reactive functions with side-effects.");
	    }
	}
	function notifyDependencyStale(derivation) {
	    if (++derivation.dependencyStaleCount === 1) {
	        propagateStaleness(derivation);
	    }
	}
	function notifyDependencyReady(derivation, dependencyDidChange) {
	    invariant(derivation.dependencyStaleCount > 0, "unexpected ready notification");
	    if (dependencyDidChange)
	        derivation.dependencyChangeCount += 1;
	    if (--derivation.dependencyStaleCount === 0) {
	        if (derivation.dependencyChangeCount > 0) {
	            derivation.dependencyChangeCount = 0;
	            var changed = derivation.onDependenciesReady();
	            propagateReadiness(derivation, changed);
	        }
	        else {
	            propagateReadiness(derivation, false);
	        }
	    }
	}
	function trackDerivedFunction(derivation, f) {
	    var hasException = true;
	    var prevObserving = derivation.observing;
	    derivation.observing = [];
	    globalState.derivationStack.push(derivation);
	    var prevTracking = globalState.isTracking;
	    globalState.isTracking = true;
	    try {
	        var result = f.call(derivation);
	        hasException = false;
	        bindDependencies(derivation, prevObserving);
	        globalState.isTracking = prevTracking;
	        return result;
	    }
	    finally {
	        if (hasException) {
	            var message = ("[mobx] An uncaught exception occurred while calculating your computed value, autorun or transformer. Or inside the render() method of an observer based React component. " +
	                "These methods should never throw exceptions as MobX will usually not be able to recover from them. " +
	                ("Please enable 'Pause on (caught) exceptions' in your debugger to find the root cause. In: '" + derivation.name + "'"));
	            if (isSpyEnabled()) {
	                spyReport({
	                    type: "error",
	                    object: this,
	                    message: message
	                });
	            }
	            console.error(message);
	            resetGlobalState();
	        }
	    }
	}
	function bindDependencies(derivation, prevObserving) {
	    globalState.derivationStack.length -= 1;
	    var _a = quickDiff(derivation.observing, prevObserving), added = _a[0], removed = _a[1];
	    for (var i = 0, l = added.length; i < l; i++) {
	        var dependency = added[i];
	        invariant(!findCycle(derivation, dependency), "Cycle detected", derivation);
	        addObserver(added[i], derivation);
	    }
	    for (var i = 0, l = removed.length; i < l; i++)
	        removeObserver(removed[i], derivation);
	}
	function findCycle(needle, node) {
	    if (needle === node)
	        return true;
	    var obs = node.observing;
	    if (obs === undefined)
	        return false;
	    for (var l = obs.length, i = 0; i < l; i++)
	        if (findCycle(needle, obs[i]))
	            return true;
	    return false;
	}
	function untracked(action) {
	    var prev = untrackedStart();
	    var res = action();
	    untrackedEnd(prev);
	    return res;
	}
	exports.untracked = untracked;
	function untrackedStart() {
	    var prev = globalState.isTracking;
	    globalState.isTracking = false;
	    return prev;
	}
	function untrackedEnd(prev) {
	    globalState.isTracking = prev;
	}
	var persistentKeys = ["mobxGuid", "resetId", "spyListeners", "strictMode"];
	var MobXGlobals = (function () {
	    function MobXGlobals() {
	        this.version = 2;
	        this.derivationStack = [];
	        this.mobxGuid = 0;
	        this.inTransaction = 0;
	        this.isTracking = false;
	        this.isRunningReactions = false;
	        this.changedAtoms = [];
	        this.pendingReactions = [];
	        this.allowStateChanges = true;
	        this.strictMode = false;
	        this.resetId = 0;
	        this.spyListeners = [];
	    }
	    return MobXGlobals;
	}());
	var globalState = (function () {
	    var res = new MobXGlobals();
	    if (global.__mobservableTrackingStack || global.__mobservableViewStack)
	        throw new Error("[mobx] An incompatible version of mobservable is already loaded.");
	    if (global.__mobxGlobal && global.__mobxGlobal.version !== res.version)
	        throw new Error("[mobx] An incompatible version of mobx is already loaded.");
	    if (global.__mobxGlobal)
	        return global.__mobxGlobal;
	    return global.__mobxGlobal = res;
	})();
	function registerGlobals() {
	}
	function resetGlobalState() {
	    globalState.resetId++;
	    var defaultGlobals = new MobXGlobals();
	    for (var key in defaultGlobals)
	        if (persistentKeys.indexOf(key) === -1)
	            globalState[key] = defaultGlobals[key];
	    globalState.allowStateChanges = !globalState.strictMode;
	}
	function addObserver(observable, node) {
	    var obs = observable.observers, l = obs.length;
	    obs[l] = node;
	    if (l === 0)
	        observable.onBecomeObserved();
	}
	function removeObserver(observable, node) {
	    var obs = observable.observers, idx = obs.indexOf(node);
	    if (idx !== -1)
	        obs.splice(idx, 1);
	    if (obs.length === 0)
	        observable.onBecomeUnobserved();
	}
	function reportObserved(observable) {
	    if (globalState.isTracking === false)
	        return;
	    var derivationStack = globalState.derivationStack;
	    var deps = derivationStack[derivationStack.length - 1].observing;
	    var depslength = deps.length;
	    if (deps[depslength - 1] !== observable && deps[depslength - 2] !== observable)
	        deps[depslength] = observable;
	}
	function propagateStaleness(observable) {
	    var os = observable.observers.slice();
	    os.forEach(notifyDependencyStale);
	    observable.staleObservers = observable.staleObservers.concat(os);
	}
	function propagateReadiness(observable, valueDidActuallyChange) {
	    observable.staleObservers.splice(0).forEach(function (o) { return notifyDependencyReady(o, valueDidActuallyChange); });
	}
	var Reaction = (function () {
	    function Reaction(name, onInvalidate) {
	        if (name === void 0) { name = "Reaction@" + getNextId(); }
	        this.name = name;
	        this.onInvalidate = onInvalidate;
	        this.staleObservers = EMPTY_ARRAY;
	        this.observers = EMPTY_ARRAY;
	        this.observing = [];
	        this.dependencyChangeCount = 0;
	        this.dependencyStaleCount = 0;
	        this.isDisposed = false;
	        this._isScheduled = false;
	        this._isTrackPending = false;
	        this._isRunning = false;
	    }
	    Reaction.prototype.onBecomeObserved = function () {
	    };
	    Reaction.prototype.onBecomeUnobserved = function () {
	    };
	    Reaction.prototype.onDependenciesReady = function () {
	        this.schedule();
	        return false;
	    };
	    Reaction.prototype.schedule = function () {
	        if (!this._isScheduled) {
	            this._isScheduled = true;
	            globalState.pendingReactions.push(this);
	            runReactions();
	        }
	    };
	    Reaction.prototype.isScheduled = function () {
	        return this.dependencyStaleCount > 0 || this._isScheduled;
	    };
	    Reaction.prototype.runReaction = function () {
	        if (!this.isDisposed) {
	            this._isScheduled = false;
	            this._isTrackPending = true;
	            this.onInvalidate();
	            if (this._isTrackPending && isSpyEnabled()) {
	                spyReport({
	                    object: this,
	                    type: "scheduled-reaction"
	                });
	            }
	        }
	    };
	    Reaction.prototype.track = function (fn) {
	        var notify = isSpyEnabled();
	        var startTime;
	        if (notify) {
	            startTime = Date.now();
	            spyReportStart({
	                object: this,
	                type: "reaction",
	                fn: fn
	            });
	        }
	        this._isRunning = true;
	        trackDerivedFunction(this, fn);
	        this._isRunning = false;
	        this._isTrackPending = false;
	        if (notify) {
	            spyReportEnd({
	                time: Date.now() - startTime
	            });
	        }
	    };
	    Reaction.prototype.dispose = function () {
	        if (!this.isDisposed) {
	            this.isDisposed = true;
	            var deps = this.observing.splice(0);
	            for (var i = 0, l = deps.length; i < l; i++)
	                removeObserver(deps[i], this);
	        }
	    };
	    Reaction.prototype.getDisposer = function () {
	        var r = this.dispose.bind(this);
	        r.$mobx = this;
	        return r;
	    };
	    Reaction.prototype.toString = function () {
	        return "Reaction[" + this.name + "]";
	    };
	    Reaction.prototype.whyRun = function () {
	        var observing = unique(this.observing).map(function (dep) { return dep.name; });
	        return ("\nWhyRun? reaction '" + this.name + "':\n * Status: [" + (this.isDisposed ? "stopped" : this._isRunning ? "running" : this.isScheduled() ? "scheduled" : "idle") + "]\n * This reaction will re-run if any of the following observables changes:\n    " + joinStrings(observing) + "\n    " + ((this._isRunning) ? " (... or any observable accessed during the remainder of the current run)" : "") + "\n\tMissing items in this list?\n\t  1. Check whether all used values are properly marked as observable (use isObservable to verify)\n\t  2. Make sure you didn't dereference values too early. MobX observes props, not primitives. E.g: use 'person.name' instead of 'name' in your computation.\n");
	    };
	    return Reaction;
	}());
	exports.Reaction = Reaction;
	var MAX_REACTION_ITERATIONS = 100;
	function runReactions() {
	    if (globalState.isRunningReactions === true || globalState.inTransaction > 0)
	        return;
	    globalState.isRunningReactions = true;
	    var allReactions = globalState.pendingReactions;
	    var iterations = 0;
	    while (allReactions.length > 0) {
	        if (++iterations === MAX_REACTION_ITERATIONS)
	            throw new Error("Reaction doesn't converge to a stable state. Probably there is a cycle in the reactive function: " + allReactions[0].toString());
	        var remainingReactions = allReactions.splice(0);
	        for (var i = 0, l = remainingReactions.length; i < l; i++)
	            remainingReactions[i].runReaction();
	    }
	    globalState.isRunningReactions = false;
	}
	var spyEnabled = false;
	function isSpyEnabled() {
	    return spyEnabled;
	}
	function spyReport(event) {
	    if (!spyEnabled)
	        return false;
	    var listeners = globalState.spyListeners;
	    for (var i = 0, l = listeners.length; i < l; i++)
	        listeners[i](event);
	}
	function spyReportStart(event) {
	    var change = objectAssign({}, event, { spyReportStart: true });
	    spyReport(change);
	}
	var END_EVENT = { spyReportEnd: true };
	function spyReportEnd(change) {
	    if (change)
	        spyReport(objectAssign({}, change, END_EVENT));
	    else
	        spyReport(END_EVENT);
	}
	function spy(listener) {
	    globalState.spyListeners.push(listener);
	    spyEnabled = globalState.spyListeners.length > 0;
	    return once(function () {
	        var idx = globalState.spyListeners.indexOf(listener);
	        if (idx !== -1)
	            globalState.spyListeners.splice(idx, 1);
	        spyEnabled = globalState.spyListeners.length > 0;
	    });
	}
	exports.spy = spy;
	function trackTransitions(onReport) {
	    deprecated("trackTransitions is deprecated. Use mobx.spy instead");
	    if (typeof onReport === "boolean") {
	        deprecated("trackTransitions only takes a single callback function. If you are using the mobx-react-devtools, please update them first");
	        onReport = arguments[1];
	    }
	    if (!onReport) {
	        deprecated("trackTransitions without callback has been deprecated and is a no-op now. If you are using the mobx-react-devtools, please update them first");
	        return function () { };
	    }
	    return spy(onReport);
	}
	function transaction(action, thisArg, report) {
	    if (thisArg === void 0) { thisArg = undefined; }
	    if (report === void 0) { report = true; }
	    transactionStart((action.name) || "anonymous transaction", thisArg, report);
	    var res = action.call(thisArg);
	    transactionEnd(report);
	    return res;
	}
	exports.transaction = transaction;
	function transactionStart(name, thisArg, report) {
	    if (thisArg === void 0) { thisArg = undefined; }
	    if (report === void 0) { report = true; }
	    globalState.inTransaction += 1;
	    if (report && isSpyEnabled()) {
	        spyReportStart({
	            type: "transaction",
	            target: thisArg,
	            name: name
	        });
	    }
	}
	function transactionEnd(report) {
	    if (report === void 0) { report = true; }
	    if (--globalState.inTransaction === 0) {
	        var values = globalState.changedAtoms.splice(0);
	        for (var i = 0, l = values.length; i < l; i++)
	            propagateAtomReady(values[i]);
	        runReactions();
	    }
	    if (report && isSpyEnabled())
	        spyReportEnd();
	}
	function hasInterceptors(interceptable) {
	    return (interceptable.interceptors && interceptable.interceptors.length > 0);
	}
	function registerInterceptor(interceptable, handler) {
	    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
	    interceptors.push(handler);
	    return once(function () {
	        var idx = interceptors.indexOf(handler);
	        if (idx !== -1)
	            interceptors.splice(idx, 1);
	    });
	}
	function interceptChange(interceptable, change) {
	    var prevU = untrackedStart();
	    var interceptors = interceptable.interceptors;
	    for (var i = 0, l = interceptors.length; i < l; i++) {
	        change = interceptors[i](change);
	        invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
	        if (!change)
	            return null;
	    }
	    untrackedEnd(prevU);
	    return change;
	}
	function hasListeners(listenable) {
	    return listenable.changeListeners && listenable.changeListeners.length > 0;
	}
	function registerListener(listenable, handler) {
	    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
	    listeners.push(handler);
	    return once(function () {
	        var idx = listeners.indexOf(handler);
	        if (idx !== -1)
	            listeners.splice(idx, 1);
	    });
	}
	function notifyListeners(listenable, change) {
	    var prevU = untrackedStart();
	    var listeners = listenable.changeListeners;
	    if (!listeners)
	        return;
	    listeners = listeners.slice();
	    if (Array.isArray(change)) {
	        for (var i = 0, l = listeners.length; i < l; i++)
	            listeners[i].apply(null, change);
	    }
	    else {
	        for (var i = 0, l = listeners.length; i < l; i++)
	            listeners[i](change);
	    }
	    untrackedEnd(prevU);
	}
	var ValueMode;
	(function (ValueMode) {
	    ValueMode[ValueMode["Recursive"] = 0] = "Recursive";
	    ValueMode[ValueMode["Reference"] = 1] = "Reference";
	    ValueMode[ValueMode["Structure"] = 2] = "Structure";
	    ValueMode[ValueMode["Flat"] = 3] = "Flat";
	})(ValueMode || (ValueMode = {}));
	function asReference(value) {
	    return new AsReference(value);
	}
	exports.asReference = asReference;
	function asStructure(value) {
	    return new AsStructure(value);
	}
	exports.asStructure = asStructure;
	function asFlat(value) {
	    return new AsFlat(value);
	}
	exports.asFlat = asFlat;
	var AsReference = (function () {
	    function AsReference(value) {
	        this.value = value;
	        assertUnwrapped(value, "Modifiers are not allowed to be nested");
	    }
	    return AsReference;
	}());
	var AsStructure = (function () {
	    function AsStructure(value) {
	        this.value = value;
	        assertUnwrapped(value, "Modifiers are not allowed to be nested");
	    }
	    return AsStructure;
	}());
	var AsFlat = (function () {
	    function AsFlat(value) {
	        this.value = value;
	        assertUnwrapped(value, "Modifiers are not allowed to be nested");
	    }
	    return AsFlat;
	}());
	function asMap(data, modifierFunc) {
	    return map(data, modifierFunc);
	}
	exports.asMap = asMap;
	function getValueModeFromValue(value, defaultMode) {
	    if (value instanceof AsReference)
	        return [ValueMode.Reference, value.value];
	    if (value instanceof AsStructure)
	        return [ValueMode.Structure, value.value];
	    if (value instanceof AsFlat)
	        return [ValueMode.Flat, value.value];
	    return [defaultMode, value];
	}
	function getValueModeFromModifierFunc(func) {
	    if (func === asReference)
	        return ValueMode.Reference;
	    else if (func === asStructure)
	        return ValueMode.Structure;
	    else if (func === asFlat)
	        return ValueMode.Flat;
	    invariant(func === undefined, "Cannot determine value mode from function. Please pass in one of these: mobx.asReference, mobx.asStructure or mobx.asFlat, got: " + func);
	    return ValueMode.Recursive;
	}
	function makeChildObservable(value, parentMode, name) {
	    var childMode;
	    if (isObservable(value))
	        return value;
	    switch (parentMode) {
	        case ValueMode.Reference:
	            return value;
	        case ValueMode.Flat:
	            assertUnwrapped(value, "Items inside 'asFlat' cannot have modifiers");
	            childMode = ValueMode.Reference;
	            break;
	        case ValueMode.Structure:
	            assertUnwrapped(value, "Items inside 'asStructure' cannot have modifiers");
	            childMode = ValueMode.Structure;
	            break;
	        case ValueMode.Recursive:
	            _a = getValueModeFromValue(value, ValueMode.Recursive), childMode = _a[0], value = _a[1];
	            break;
	        default:
	            invariant(false, "Illegal State");
	    }
	    if (Array.isArray(value))
	        return createObservableArray(value, childMode, name);
	    if (isPlainObject(value) && Object.isExtensible(value))
	        return extendObservableHelper(value, value, childMode, name);
	    return value;
	    var _a;
	}
	function assertUnwrapped(value, message) {
	    if (value instanceof AsReference || value instanceof AsStructure || value instanceof AsFlat)
	        throw new Error("[mobx] asStructure / asReference / asFlat cannot be used here. " + message);
	}
	var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
	var StubArray = (function () {
	    function StubArray() {
	    }
	    return StubArray;
	}());
	StubArray.prototype = [];
	var ObservableArrayAdministration = (function () {
	    function ObservableArrayAdministration(name, mode, array, owned) {
	        this.mode = mode;
	        this.array = array;
	        this.owned = owned;
	        this.lastKnownLength = 0;
	        this.interceptors = null;
	        this.changeListeners = null;
	        this.atom = new Atom(name || ("ObservableArray@" + getNextId()));
	    }
	    ObservableArrayAdministration.prototype.makeReactiveArrayItem = function (value) {
	        assertUnwrapped(value, "Array values cannot have modifiers");
	        if (this.mode === ValueMode.Flat || this.mode === ValueMode.Reference)
	            return value;
	        return makeChildObservable(value, this.mode, this.atom.name + "[..]");
	    };
	    ObservableArrayAdministration.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
	        if (fireImmediately === void 0) { fireImmediately = false; }
	        if (fireImmediately) {
	            listener({
	                object: this.array,
	                type: "splice",
	                index: 0,
	                added: this.values.slice(),
	                addedCount: this.values.length,
	                removed: [],
	                removedCount: 0
	            });
	        }
	        return registerListener(this, listener);
	    };
	    ObservableArrayAdministration.prototype.getArrayLength = function () {
	        this.atom.reportObserved();
	        return this.values.length;
	    };
	    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
	        if (typeof newLength !== "number" || newLength < 0)
	            throw new Error("[mobx.array] Out of range: " + newLength);
	        var currentLength = this.values.length;
	        if (newLength === currentLength)
	            return;
	        else if (newLength > currentLength)
	            this.spliceWithArray(currentLength, 0, new Array(newLength - currentLength));
	        else
	            this.spliceWithArray(newLength, currentLength - newLength);
	    };
	    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
	        if (oldLength !== this.lastKnownLength)
	            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
	        this.lastKnownLength += delta;
	        if (delta > 0 && oldLength + delta > OBSERVABLE_ARRAY_BUFFER_SIZE)
	            reserveArrayBuffer(oldLength + delta);
	    };
	    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
	        checkIfStateModificationsAreAllowed();
	        var length = this.values.length;
	        if (index === undefined)
	            index = 0;
	        else if (index > length)
	            index = length;
	        else if (index < 0)
	            index = Math.max(0, length + index);
	        if (arguments.length === 1)
	            deleteCount = length - index;
	        else if (deleteCount === undefined || deleteCount === null)
	            deleteCount = 0;
	        else
	            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
	        if (newItems === undefined)
	            newItems = [];
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                object: this.array,
	                type: "splice",
	                index: index,
	                removedCount: deleteCount,
	                added: newItems
	            });
	            if (!change)
	                return EMPTY_ARRAY;
	            deleteCount = change.removedCount;
	            newItems = change.added;
	        }
	        newItems = newItems.map(this.makeReactiveArrayItem, this);
	        var lengthDelta = newItems.length - deleteCount;
	        this.updateArrayLength(length, lengthDelta);
	        var res = (_a = this.values).splice.apply(_a, [index, deleteCount].concat(newItems));
	        if (deleteCount !== 0 || newItems.length !== 0)
	            this.notifyArraySplice(index, newItems, res);
	        return res;
	        var _a;
	    };
	    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
	        var notifySpy = !this.owned && isSpyEnabled();
	        var notify = hasListeners(this);
	        var change = notify || notifySpy ? {
	            object: this.array,
	            type: "update",
	            index: index, newValue: newValue, oldValue: oldValue
	        } : null;
	        if (notifySpy)
	            spyReportStart(change);
	        this.atom.reportChanged();
	        if (notify)
	            notifyListeners(this, change);
	        if (notifySpy)
	            spyReportEnd();
	    };
	    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
	        var notifySpy = !this.owned && isSpyEnabled();
	        var notify = hasListeners(this);
	        var change = notify || notifySpy ? {
	            object: this.array,
	            type: "splice",
	            index: index, removed: removed, added: added,
	            removedCount: removed.length,
	            addedCount: added.length
	        } : null;
	        if (notifySpy)
	            spyReportStart(change);
	        this.atom.reportChanged();
	        if (notify)
	            notifyListeners(this, change);
	        if (notifySpy)
	            spyReportEnd();
	    };
	    return ObservableArrayAdministration;
	}());
	var ObservableArray = (function (_super) {
	    __extends(ObservableArray, _super);
	    function ObservableArray(initialValues, mode, name, owned) {
	        if (owned === void 0) { owned = false; }
	        _super.call(this);
	        var adm = new ObservableArrayAdministration(name, mode, this, owned);
	        Object.defineProperty(this, "$mobx", {
	            enumerable: false,
	            configurable: false,
	            writable: false,
	            value: adm
	        });
	        if (initialValues && initialValues.length) {
	            adm.updateArrayLength(0, initialValues.length);
	            adm.values = initialValues.map(adm.makeReactiveArrayItem, adm);
	            adm.notifyArraySplice(0, adm.values.slice(), EMPTY_ARRAY);
	        }
	        else {
	            adm.values = [];
	        }
	    }
	    ObservableArray.prototype.intercept = function (handler) {
	        return this.$mobx.intercept(handler);
	    };
	    ObservableArray.prototype.observe = function (listener, fireImmediately) {
	        if (fireImmediately === void 0) { fireImmediately = false; }
	        return this.$mobx.observe(listener, fireImmediately);
	    };
	    ObservableArray.prototype.clear = function () {
	        return this.splice(0);
	    };
	    ObservableArray.prototype.replace = function (newItems) {
	        return this.$mobx.spliceWithArray(0, this.$mobx.values.length, newItems);
	    };
	    ObservableArray.prototype.toJS = function () {
	        return this.slice();
	    };
	    ObservableArray.prototype.toJSON = function () {
	        return this.toJS();
	    };
	    ObservableArray.prototype.peek = function () {
	        return this.$mobx.values;
	    };
	    ObservableArray.prototype.find = function (predicate, thisArg, fromIndex) {
	        if (fromIndex === void 0) { fromIndex = 0; }
	        this.$mobx.atom.reportObserved();
	        var items = this.$mobx.values, l = items.length;
	        for (var i = fromIndex; i < l; i++)
	            if (predicate.call(thisArg, items[i], i, this))
	                return items[i];
	        return null;
	    };
	    ObservableArray.prototype.splice = function (index, deleteCount) {
	        var newItems = [];
	        for (var _i = 2; _i < arguments.length; _i++) {
	            newItems[_i - 2] = arguments[_i];
	        }
	        switch (arguments.length) {
	            case 0:
	                return [];
	            case 1:
	                return this.$mobx.spliceWithArray(index);
	            case 2:
	                return this.$mobx.spliceWithArray(index, deleteCount);
	        }
	        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
	    };
	    ObservableArray.prototype.push = function () {
	        var items = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            items[_i - 0] = arguments[_i];
	        }
	        var adm = this.$mobx;
	        adm.spliceWithArray(adm.values.length, 0, items);
	        return adm.values.length;
	    };
	    ObservableArray.prototype.pop = function () {
	        return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0];
	    };
	    ObservableArray.prototype.shift = function () {
	        return this.splice(0, 1)[0];
	    };
	    ObservableArray.prototype.unshift = function () {
	        var items = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            items[_i - 0] = arguments[_i];
	        }
	        var adm = this.$mobx;
	        adm.spliceWithArray(0, 0, items);
	        return adm.values.length;
	    };
	    ObservableArray.prototype.reverse = function () {
	        this.$mobx.atom.reportObserved();
	        var clone = this.slice();
	        return clone.reverse.apply(clone, arguments);
	    };
	    ObservableArray.prototype.sort = function (compareFn) {
	        this.$mobx.atom.reportObserved();
	        var clone = this.slice();
	        return clone.sort.apply(clone, arguments);
	    };
	    ObservableArray.prototype.remove = function (value) {
	        var idx = this.$mobx.values.indexOf(value);
	        if (idx > -1) {
	            this.splice(idx, 1);
	            return true;
	        }
	        return false;
	    };
	    ObservableArray.prototype.toString = function () {
	        return "[mobx.array] " + Array.prototype.toString.apply(this.$mobx.values, arguments);
	    };
	    ObservableArray.prototype.toLocaleString = function () {
	        return "[mobx.array] " + Array.prototype.toLocaleString.apply(this.$mobx.values, arguments);
	    };
	    return ObservableArray;
	}(StubArray));
	makeNonEnumerable(ObservableArray.prototype, [
	    "constructor",
	    "observe",
	    "clear",
	    "replace",
	    "toJSON",
	    "peek",
	    "find",
	    "splice",
	    "push",
	    "pop",
	    "shift",
	    "unshift",
	    "reverse",
	    "sort",
	    "remove",
	    "toString",
	    "toLocaleString"
	]);
	Object.defineProperty(ObservableArray.prototype, "length", {
	    enumerable: false,
	    configurable: true,
	    get: function () {
	        return this.$mobx.getArrayLength();
	    },
	    set: function (newLength) {
	        this.$mobx.setArrayLength(newLength);
	    }
	});
	[
	    "concat",
	    "every",
	    "filter",
	    "forEach",
	    "indexOf",
	    "join",
	    "lastIndexOf",
	    "map",
	    "reduce",
	    "reduceRight",
	    "slice",
	    "some"
	].forEach(function (funcName) {
	    var baseFunc = Array.prototype[funcName];
	    Object.defineProperty(ObservableArray.prototype, funcName, {
	        configurable: false,
	        writable: true,
	        enumerable: false,
	        value: function () {
	            this.$mobx.atom.reportObserved();
	            return baseFunc.apply(this.$mobx.values, arguments);
	        }
	    });
	});
	function createArrayBufferItem(index) {
	    Object.defineProperty(ObservableArray.prototype, "" + index, {
	        enumerable: false,
	        configurable: false,
	        set: createArraySetter(index),
	        get: createArrayGetter(index)
	    });
	}
	function createArraySetter(index) {
	    return function (newValue) {
	        var adm = this.$mobx;
	        var values = adm.values;
	        assertUnwrapped(newValue, "Modifiers cannot be used on array values. For non-reactive array values use makeReactive(asFlat(array)).");
	        if (index < values.length) {
	            checkIfStateModificationsAreAllowed();
	            var oldValue = values[index];
	            if (hasInterceptors(adm)) {
	                var change = interceptChange(adm, {
	                    type: "update",
	                    object: adm.array,
	                    index: index, newValue: newValue
	                });
	                if (!change)
	                    return;
	                newValue = change.newValue;
	            }
	            newValue = adm.makeReactiveArrayItem(newValue);
	            var changed = (adm.mode === ValueMode.Structure) ? !deepEquals(oldValue, newValue) : oldValue !== newValue;
	            if (changed) {
	                values[index] = newValue;
	                adm.notifyArrayChildUpdate(index, newValue, oldValue);
	            }
	        }
	        else if (index === values.length) {
	            adm.spliceWithArray(index, 0, [newValue]);
	        }
	        else
	            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
	    };
	}
	function createArrayGetter(index) {
	    return function () {
	        var impl = this.$mobx;
	        if (impl && index < impl.values.length) {
	            impl.atom.reportObserved();
	            return impl.values[index];
	        }
	        return undefined;
	    };
	}
	function reserveArrayBuffer(max) {
	    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max; index++)
	        createArrayBufferItem(index);
	    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
	}
	reserveArrayBuffer(1000);
	function createObservableArray(initialValues, mode, name) {
	    return new ObservableArray(initialValues, mode, name);
	}
	function fastArray(initialValues) {
	    deprecated("fastArray is deprecated. Please use `observable(asFlat([]))`");
	    return createObservableArray(initialValues, ValueMode.Flat, null);
	}
	exports.fastArray = fastArray;
	function isObservableArray(thing) {
	    return thing instanceof ObservableArray;
	}
	exports.isObservableArray = isObservableArray;
	var ObservableMapMarker = {};
	var ObservableMap = (function () {
	    function ObservableMap(initialData, valueModeFunc) {
	        var _this = this;
	        this.$mobx = ObservableMapMarker;
	        this._data = {};
	        this._hasMap = {};
	        this.name = "ObservableMap@" + getNextId();
	        this._keys = new ObservableArray(null, ValueMode.Reference, this.name + ".keys()", true);
	        this.interceptors = null;
	        this.changeListeners = null;
	        this._valueMode = getValueModeFromModifierFunc(valueModeFunc);
	        if (this._valueMode === ValueMode.Flat)
	            this._valueMode = ValueMode.Reference;
	        allowStateChanges(true, function () {
	            if (isPlainObject(initialData))
	                _this.merge(initialData);
	            else if (Array.isArray(initialData))
	                initialData.forEach(function (_a) {
	                    var key = _a[0], value = _a[1];
	                    return _this.set(key, value);
	                });
	        });
	    }
	    ObservableMap.prototype._has = function (key) {
	        return typeof this._data[key] !== "undefined";
	    };
	    ObservableMap.prototype.has = function (key) {
	        if (!this.isValidKey(key))
	            return false;
	        key = "" + key;
	        if (this._hasMap[key])
	            return this._hasMap[key].get();
	        return this._updateHasMapEntry(key, false).get();
	    };
	    ObservableMap.prototype.set = function (key, value) {
	        this.assertValidKey(key);
	        key = "" + key;
	        var hasKey = this._has(key);
	        assertUnwrapped(value, "[mobx.map.set] Expected unwrapped value to be inserted to key '" + key + "'. If you need to use modifiers pass them as second argument to the constructor");
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                type: hasKey ? "update" : "add",
	                object: this,
	                newValue: value,
	                name: key
	            });
	            if (!change)
	                return;
	            value = change.newValue;
	        }
	        if (hasKey) {
	            this._updateValue(key, value);
	        }
	        else {
	            this._addValue(key, value);
	        }
	    };
	    ObservableMap.prototype.delete = function (key) {
	        var _this = this;
	        this.assertValidKey(key);
	        key = "" + key;
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                type: "delete",
	                object: this,
	                name: key
	            });
	            if (!change)
	                return;
	        }
	        if (this._has(key)) {
	            var notifySpy = isSpyEnabled();
	            var notify = hasListeners(this);
	            var change = notify || notifySpy ? {
	                type: "delete",
	                object: this,
	                oldValue: this._data[key].value,
	                name: key
	            } : null;
	            if (notifySpy)
	                spyReportStart(change);
	            transaction(function () {
	                _this._keys.remove(key);
	                _this._updateHasMapEntry(key, false);
	                var observable = _this._data[key];
	                observable.setNewValue(undefined);
	                _this._data[key] = undefined;
	            }, undefined, false);
	            if (notify)
	                notifyListeners(this, change);
	            if (notifySpy)
	                spyReportEnd();
	        }
	    };
	    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
	        var entry = this._hasMap[key];
	        if (entry) {
	            entry.setNewValue(value);
	        }
	        else {
	            entry = this._hasMap[key] = new ObservableValue(value, ValueMode.Reference, this.name + "." + key + "?", false);
	        }
	        return entry;
	    };
	    ObservableMap.prototype._updateValue = function (name, newValue) {
	        var observable = this._data[name];
	        newValue = observable.prepareNewValue(newValue);
	        if (newValue !== UNCHANGED) {
	            var notifySpy = isSpyEnabled();
	            var notify = hasListeners(this);
	            var change = notify || notifySpy ? {
	                type: "update",
	                object: this,
	                oldValue: observable.value,
	                name: name, newValue: newValue
	            } : null;
	            if (notifySpy)
	                spyReportStart(change);
	            observable.setNewValue(newValue);
	            if (notify)
	                notifyListeners(this, change);
	            if (notifySpy)
	                spyReportEnd();
	        }
	    };
	    ObservableMap.prototype._addValue = function (name, newValue) {
	        var _this = this;
	        transaction(function () {
	            var observable = _this._data[name] = new ObservableValue(newValue, _this._valueMode, _this.name + "." + name, false);
	            newValue = observable.value;
	            _this._updateHasMapEntry(name, true);
	            _this._keys.push(name);
	        }, undefined, false);
	        var notifySpy = isSpyEnabled();
	        var notify = hasListeners(this);
	        var change = notify || notifySpy ? {
	            type: "add",
	            object: this,
	            name: name, newValue: newValue
	        } : null;
	        if (notifySpy)
	            spyReportStart(change);
	        if (notify)
	            notifyListeners(this, change);
	        if (notifySpy)
	            spyReportEnd();
	    };
	    ObservableMap.prototype.get = function (key) {
	        key = "" + key;
	        if (this.has(key))
	            return this._data[key].get();
	        return undefined;
	    };
	    ObservableMap.prototype.keys = function () {
	        return this._keys.slice();
	    };
	    ObservableMap.prototype.values = function () {
	        return this.keys().map(this.get, this);
	    };
	    ObservableMap.prototype.entries = function () {
	        var _this = this;
	        return this.keys().map(function (key) { return [key, _this.get(key)]; });
	    };
	    ObservableMap.prototype.forEach = function (callback, thisArg) {
	        var _this = this;
	        this.keys().forEach(function (key) { return callback.call(thisArg, _this.get(key), key); });
	    };
	    ObservableMap.prototype.merge = function (other) {
	        var _this = this;
	        transaction(function () {
	            if (other instanceof ObservableMap)
	                other.keys().forEach(function (key) { return _this.set(key, other.get(key)); });
	            else
	                Object.keys(other).forEach(function (key) { return _this.set(key, other[key]); });
	        }, undefined, false);
	        return this;
	    };
	    ObservableMap.prototype.clear = function () {
	        var _this = this;
	        transaction(function () {
	            untracked(function () {
	                _this.keys().forEach(_this.delete, _this);
	            });
	        }, undefined, false);
	    };
	    Object.defineProperty(ObservableMap.prototype, "size", {
	        get: function () {
	            return this._keys.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ObservableMap.prototype.toJS = function () {
	        var _this = this;
	        var res = {};
	        this.keys().forEach(function (key) { return res[key] = _this.get(key); });
	        return res;
	    };
	    ObservableMap.prototype.toJs = function () {
	        deprecated("toJs is deprecated, use toJS instead");
	        return this.toJS();
	    };
	    ObservableMap.prototype.toJSON = function () {
	        return this.toJS();
	    };
	    ObservableMap.prototype.isValidKey = function (key) {
	        if (key === null || key === undefined)
	            return false;
	        if (typeof key !== "string" && typeof key !== "number" && typeof key !== "boolean")
	            return false;
	        return true;
	    };
	    ObservableMap.prototype.assertValidKey = function (key) {
	        if (!this.isValidKey(key))
	            throw new Error("[mobx.map] Invalid key: '" + key + "'");
	    };
	    ObservableMap.prototype.toString = function () {
	        var _this = this;
	        return this.name + "[{ " + this.keys().map(function (key) { return (key + ": " + ("" + _this.get(key))); }).join(", ") + " }]";
	    };
	    ObservableMap.prototype.observe = function (listener, fireImmediately) {
	        invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable maps.");
	        return registerListener(this, listener);
	    };
	    ObservableMap.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    return ObservableMap;
	}());
	exports.ObservableMap = ObservableMap;
	function map(initialValues, valueModifier) {
	    return new ObservableMap(initialValues, valueModifier);
	}
	exports.map = map;
	function isObservableMap(thing) {
	    return thing instanceof ObservableMap;
	}
	exports.isObservableMap = isObservableMap;
	var ObservableObjectAdministration = (function () {
	    function ObservableObjectAdministration(target, name, mode) {
	        this.target = target;
	        this.name = name;
	        this.mode = mode;
	        this.values = {};
	        this.changeListeners = null;
	        this.interceptors = null;
	    }
	    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
	        invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
	        return registerListener(this, callback);
	    };
	    ObservableObjectAdministration.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    return ObservableObjectAdministration;
	}());
	function asObservableObject(target, name, mode) {
	    if (mode === void 0) { mode = ValueMode.Recursive; }
	    if (isObservableObject(target))
	        return target.$mobx;
	    if (!isPlainObject(target))
	        name = target.constructor.name + "@" + getNextId();
	    if (!name)
	        name = "ObservableObject@" + getNextId();
	    var adm = new ObservableObjectAdministration(target, name, mode);
	    Object.defineProperty(target, "$mobx", {
	        enumerable: false,
	        configurable: false,
	        writable: false,
	        value: adm
	    });
	    return adm;
	}
	function setObservableObjectInstanceProperty(adm, propName, value) {
	    if (adm.values[propName])
	        adm.target[propName] = value;
	    else
	        defineObservableProperty(adm, propName, value, true);
	}
	function defineObservableProperty(adm, propName, newValue, asInstanceProperty) {
	    if (asInstanceProperty)
	        assertPropertyConfigurable(adm.target, propName);
	    var observable;
	    var name = adm.name + "." + propName;
	    var isComputed = true;
	    if (typeof newValue === "function" && newValue.length === 0 && !isAction(newValue))
	        observable = new ComputedValue(newValue, adm.target, false, name);
	    else if (newValue instanceof AsStructure && typeof newValue.value === "function" && newValue.value.length === 0)
	        observable = new ComputedValue(newValue.value, adm.target, true, name);
	    else {
	        isComputed = false;
	        if (hasInterceptors(adm)) {
	            var change = interceptChange(adm, {
	                object: adm.target,
	                name: propName,
	                type: "add",
	                newValue: newValue
	            });
	            if (!change)
	                return;
	            newValue = change.newValue;
	        }
	        observable = new ObservableValue(newValue, adm.mode, name, false);
	        newValue = observable.value;
	    }
	    adm.values[propName] = observable;
	    if (asInstanceProperty) {
	        Object.defineProperty(adm.target, propName, {
	            configurable: true,
	            enumerable: !isComputed,
	            get: function () {
	                return observable.get();
	            },
	            set: isComputed
	                ? throwingComputedValueSetter
	                : function (v) {
	                    setPropertyValue(this, propName, v);
	                }
	        });
	    }
	    if (!isComputed)
	        notifyPropertyAddition(adm, adm.target, propName, newValue);
	}
	function setPropertyValue(instance, name, newValue) {
	    var adm = instance.$mobx;
	    var observable = instance.$mobx.values[name];
	    if (hasInterceptors(adm)) {
	        var change = interceptChange(adm, {
	            type: "update",
	            object: instance,
	            name: name, newValue: newValue
	        });
	        if (!change)
	            return;
	        newValue = change.newValue;
	    }
	    newValue = observable.prepareNewValue(newValue);
	    if (newValue !== UNCHANGED) {
	        var notify = hasListeners(adm);
	        var notifySpy = isSpyEnabled();
	        var change = notifyListeners || hasListeners ? {
	            type: "update",
	            object: instance,
	            oldValue: observable.value,
	            name: name, newValue: newValue
	        } : null;
	        if (notifySpy)
	            spyReportStart(change);
	        observable.setNewValue(newValue);
	        if (notify)
	            notifyListeners(adm, change);
	        if (notifySpy)
	            spyReportEnd();
	    }
	}
	function notifyPropertyAddition(adm, object, name, newValue) {
	    var notify = hasListeners(adm);
	    var notifySpy = isSpyEnabled();
	    var change = notify || notifySpy ? {
	        type: "add",
	        object: object, name: name, newValue: newValue
	    } : null;
	    if (notifySpy)
	        spyReportStart(change);
	    if (notify)
	        notifyListeners(adm, change);
	    if (notifySpy)
	        spyReportEnd();
	}
	function isObservableObject(thing) {
	    if (typeof thing === "object" && thing !== null) {
	        runLazyInitializers(thing);
	        return thing.$mobx instanceof ObservableObjectAdministration;
	    }
	    return false;
	}
	exports.isObservableObject = isObservableObject;
	var UNCHANGED = {};
	var ObservableValue = (function (_super) {
	    __extends(ObservableValue, _super);
	    function ObservableValue(value, mode, name, notifySpy) {
	        if (name === void 0) { name = "ObservableValue@" + getNextId(); }
	        if (notifySpy === void 0) { notifySpy = true; }
	        _super.call(this, name);
	        this.mode = mode;
	        this.hasUnreportedChange = false;
	        this.value = undefined;
	        var _a = getValueModeFromValue(value, ValueMode.Recursive), childmode = _a[0], unwrappedValue = _a[1];
	        if (this.mode === ValueMode.Recursive)
	            this.mode = childmode;
	        this.value = makeChildObservable(unwrappedValue, this.mode, this.name);
	        if (notifySpy && isSpyEnabled()) {
	            spyReport({ type: "create", object: this, newValue: this.value });
	        }
	    }
	    ObservableValue.prototype.set = function (newValue) {
	        var oldValue = this.value;
	        newValue = this.prepareNewValue(newValue);
	        if (newValue !== UNCHANGED) {
	            var notifySpy = isSpyEnabled();
	            if (notifySpy) {
	                spyReportStart({
	                    type: "update",
	                    object: this,
	                    newValue: newValue, oldValue: oldValue
	                });
	            }
	            this.setNewValue(newValue);
	            if (notifySpy)
	                spyReportEnd();
	        }
	    };
	    ObservableValue.prototype.prepareNewValue = function (newValue) {
	        assertUnwrapped(newValue, "Modifiers cannot be used on non-initial values.");
	        checkIfStateModificationsAreAllowed();
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, { object: this, type: "update", newValue: newValue });
	            if (!change)
	                return UNCHANGED;
	            newValue = change.newValue;
	        }
	        var changed = valueDidChange(this.mode === ValueMode.Structure, this.value, newValue);
	        if (changed)
	            return makeChildObservable(newValue, this.mode, this.name);
	        return UNCHANGED;
	    };
	    ObservableValue.prototype.setNewValue = function (newValue) {
	        var oldValue = this.value;
	        this.value = newValue;
	        this.reportChanged();
	        if (hasListeners(this))
	            notifyListeners(this, [newValue, oldValue]);
	    };
	    ObservableValue.prototype.get = function () {
	        this.reportObserved();
	        return this.value;
	    };
	    ObservableValue.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    ObservableValue.prototype.observe = function (listener, fireImmediately) {
	        if (fireImmediately)
	            listener(this.value, undefined);
	        return registerListener(this, listener);
	    };
	    ObservableValue.prototype.toJSON = function () {
	        return this.get();
	    };
	    ObservableValue.prototype.toString = function () {
	        return this.name + "[" + this.value + "]";
	    };
	    return ObservableValue;
	}(Atom));
	function getAtom(thing, property) {
	    if (typeof thing === "object" && thing !== null) {
	        if (isObservableArray(thing)) {
	            invariant(property === undefined, "It is not possible to get index atoms from arrays");
	            return thing.$mobx.atom;
	        }
	        if (isObservableMap(thing)) {
	            if (property === undefined)
	                return getAtom(thing._keys);
	            var observable_1 = thing._data[property] || thing._hasMap[property];
	            invariant(!!observable_1, "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
	            return observable_1;
	        }
	        runLazyInitializers(thing);
	        if (isObservableObject(thing)) {
	            invariant(!!property, "please specify a property");
	            var observable_2 = thing.$mobx.values[property];
	            invariant(!!observable_2, "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
	            return observable_2;
	        }
	        if (thing instanceof Atom || thing instanceof ComputedValue || thing instanceof Reaction) {
	            return thing;
	        }
	    }
	    else if (typeof thing === "function") {
	        if (thing.$mobx instanceof Reaction) {
	            return thing.$mobx;
	        }
	    }
	    invariant(false, "Cannot obtain atom from " + thing);
	}
	function getAdministration(thing, property) {
	    invariant(thing, "Expection some object");
	    if (property !== undefined)
	        return getAdministration(getAtom(thing, property));
	    if (thing instanceof Atom || thing instanceof ComputedValue || thing instanceof Reaction)
	        return thing;
	    if (isObservableMap(thing))
	        return thing;
	    runLazyInitializers(thing);
	    if (thing.$mobx)
	        return thing.$mobx;
	    invariant(false, "Cannot obtain administration from " + thing);
	}
	function getDebugName(thing, property) {
	    var named;
	    if (property !== undefined)
	        named = getAtom(thing, property);
	    else if (isObservableObject(thing) || isObservableMap(thing))
	        named = getAdministration(thing);
	    else
	        named = getAtom(thing);
	    return named.name;
	}
	function createClassPropertyDecorator(onInitialize, get, set, enumerable, allowCustomArguments) {
	    function classPropertyDecorator(target, key, descriptor, customArgs) {
	        invariant(allowCustomArguments || quacksLikeADecorator(arguments), "This function is a decorator, but it wasn't invoked like a decorator");
	        if (!descriptor) {
	            return {
	                enumerable: enumerable,
	                configurable: true,
	                get: function () {
	                    if (!this.__mobxInitializedProps || this.__mobxInitializedProps[key] !== true)
	                        typescriptInitializeProperty(this, key, undefined, onInitialize, customArgs, descriptor);
	                    return get.call(this, key);
	                },
	                set: function (v) {
	                    if (!this.__mobxInitializedProps || this.__mobxInitializedProps[key] !== true) {
	                        typescriptInitializeProperty(this, key, v, onInitialize, customArgs, descriptor);
	                    }
	                    else {
	                        set.call(this, key, v);
	                    }
	                }
	            };
	        }
	        else {
	            if (!target.hasOwnProperty("__mobxLazyInitializers")) {
	                Object.defineProperty(target, "__mobxLazyInitializers", {
	                    writable: false, configurable: false, enumerable: false,
	                    value: (target.__mobxLazyInitializers && target.__mobxLazyInitializers.slice()) || []
	                });
	            }
	            var value_1 = descriptor.value, initializer_1 = descriptor.initializer;
	            target.__mobxLazyInitializers.push(function (instance) {
	                onInitialize(instance, key, (initializer_1 ? initializer_1.call(instance) : value_1), customArgs, descriptor);
	            });
	            return {
	                enumerable: enumerable, configurable: true,
	                get: function () {
	                    if (this.__mobxDidRunLazyInitializers !== true)
	                        runLazyInitializers(this);
	                    return get.call(this, key);
	                },
	                set: function (v) {
	                    if (this.__mobxDidRunLazyInitializers !== true)
	                        runLazyInitializers(this);
	                    set.call(this, key, v);
	                }
	            };
	        }
	    }
	    if (allowCustomArguments) {
	        return function () {
	            if (quacksLikeADecorator(arguments))
	                return classPropertyDecorator.apply(null, arguments);
	            var outerArgs = arguments;
	            return function (target, key, descriptor) { return classPropertyDecorator(target, key, descriptor, outerArgs); };
	        };
	    }
	    return classPropertyDecorator;
	}
	function typescriptInitializeProperty(instance, key, v, onInitialize, customArgs, baseDescriptor) {
	    if (!instance.hasOwnProperty("__mobxInitializedProps")) {
	        Object.defineProperty(instance, "__mobxInitializedProps", {
	            enumerable: false, configurable: false, writable: true,
	            value: {}
	        });
	    }
	    instance.__mobxInitializedProps[key] = true;
	    onInitialize(instance, key, v, customArgs, baseDescriptor);
	}
	function runLazyInitializers(instance) {
	    if (instance.__mobxDidRunLazyInitializers === true)
	        return;
	    if (instance.__mobxLazyInitializers) {
	        Object.defineProperty(instance, "__mobxDidRunLazyInitializers", {
	            enumerable: false,
	            configurable: false,
	            writable: false,
	            value: true
	        });
	        instance.__mobxDidRunLazyInitializers && instance.__mobxLazyInitializers.forEach(function (initializer) { return initializer(instance); });
	    }
	}
	function quacksLikeADecorator(args) {
	    return (args.length === 2 || args.length === 3) && typeof args[1] === "string";
	}
	var SimpleEventEmitter = (function () {
	    function SimpleEventEmitter() {
	        this.listeners = [];
	        deprecated("extras.SimpleEventEmitter is deprecated and will be removed in the next major release");
	    }
	    SimpleEventEmitter.prototype.emit = function () {
	        var listeners = this.listeners.slice();
	        for (var i = 0, l = listeners.length; i < l; i++)
	            listeners[i].apply(null, arguments);
	    };
	    SimpleEventEmitter.prototype.on = function (listener) {
	        var _this = this;
	        this.listeners.push(listener);
	        return once(function () {
	            var idx = _this.listeners.indexOf(listener);
	            if (idx !== -1)
	                _this.listeners.splice(idx, 1);
	        });
	    };
	    SimpleEventEmitter.prototype.once = function (listener) {
	        var subscription = this.on(function () {
	            subscription();
	            listener.apply(this, arguments);
	        });
	        return subscription;
	    };
	    return SimpleEventEmitter;
	}());
	exports.SimpleEventEmitter = SimpleEventEmitter;
	var EMPTY_ARRAY = [];
	Object.freeze(EMPTY_ARRAY);
	function getNextId() {
	    return ++globalState.mobxGuid;
	}
	function invariant(check, message, thing) {
	    if (!check)
	        throw new Error("[mobx] Invariant failed: " + message + (thing ? " in '" + thing + "'" : ""));
	}
	var deprecatedMessages = [];
	function deprecated(msg) {
	    if (deprecatedMessages.indexOf(msg) !== -1)
	        return;
	    deprecatedMessages.push(msg);
	    console.error("[mobx] Deprecated: " + msg);
	}
	function once(func) {
	    var invoked = false;
	    return function () {
	        if (invoked)
	            return;
	        invoked = true;
	        return func.apply(this, arguments);
	    };
	}
	var noop = function () { };
	function unique(list) {
	    var res = [];
	    list.forEach(function (item) {
	        if (res.indexOf(item) === -1)
	            res.push(item);
	    });
	    return res;
	}
	function joinStrings(things, limit, separator) {
	    if (limit === void 0) { limit = 100; }
	    if (separator === void 0) { separator = " - "; }
	    if (!things)
	        return "";
	    var sliced = things.slice(0, limit);
	    return "" + sliced.join(separator) + (things.length > limit ? " (... and " + (things.length - limit) + "more)" : "");
	}
	function isPlainObject(value) {
	    return value !== null && typeof value === "object" && Object.getPrototypeOf(value) === Object.prototype;
	}
	function objectAssign() {
	    var res = arguments[0];
	    for (var i = 1, l = arguments.length; i < l; i++) {
	        var source = arguments[i];
	        for (var key in source)
	            if (source.hasOwnProperty(key)) {
	                res[key] = source[key];
	            }
	    }
	    return res;
	}
	function valueDidChange(compareStructural, oldValue, newValue) {
	    return compareStructural
	        ? !deepEquals(oldValue, newValue)
	        : oldValue !== newValue;
	}
	function makeNonEnumerable(object, props) {
	    for (var i = 0; i < props.length; i++) {
	        Object.defineProperty(object, props[i], {
	            configurable: true,
	            writable: true,
	            enumerable: false,
	            value: object[props[i]]
	        });
	    }
	}
	function isPropertyConfigurable(object, prop) {
	    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
	    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
	}
	function assertPropertyConfigurable(object, prop) {
	    invariant(isPropertyConfigurable(object, prop), "Cannot make property '" + prop + "' observable, it is not configurable and writable in the target object");
	}
	function getEnumerableKeys(obj) {
	    var res = [];
	    for (var key in obj)
	        res.push(key);
	    return res;
	}
	function deepEquals(a, b) {
	    if (a === null && b === null)
	        return true;
	    if (a === undefined && b === undefined)
	        return true;
	    var aIsArray = Array.isArray(a) || isObservableArray(a);
	    if (aIsArray !== (Array.isArray(b) || isObservableArray(b))) {
	        return false;
	    }
	    else if (aIsArray) {
	        if (a.length !== b.length)
	            return false;
	        for (var i = a.length; i >= 0; i--)
	            if (!deepEquals(a[i], b[i]))
	                return false;
	        return true;
	    }
	    else if (typeof a === "object" && typeof b === "object") {
	        if (a === null || b === null)
	            return false;
	        if (getEnumerableKeys(a).length !== getEnumerableKeys(b).length)
	            return false;
	        for (var prop in a) {
	            if (!(prop in b))
	                return false;
	            if (!deepEquals(a[prop], b[prop]))
	                return false;
	        }
	        return true;
	    }
	    return a === b;
	}
	function quickDiff(current, base) {
	    if (!base || !base.length)
	        return [current, []];
	    if (!current || !current.length)
	        return [[], base];
	    var added = [];
	    var removed = [];
	    var currentIndex = 0, currentSearch = 0, currentLength = current.length, currentExhausted = false, baseIndex = 0, baseSearch = 0, baseLength = base.length, isSearching = false, baseExhausted = false;
	    while (!baseExhausted && !currentExhausted) {
	        if (!isSearching) {
	            if (currentIndex < currentLength && baseIndex < baseLength && current[currentIndex] === base[baseIndex]) {
	                currentIndex++;
	                baseIndex++;
	                if (currentIndex === currentLength && baseIndex === baseLength)
	                    return [added, removed];
	                continue;
	            }
	            currentSearch = currentIndex;
	            baseSearch = baseIndex;
	            isSearching = true;
	        }
	        baseSearch += 1;
	        currentSearch += 1;
	        if (baseSearch >= baseLength)
	            baseExhausted = true;
	        if (currentSearch >= currentLength)
	            currentExhausted = true;
	        if (!currentExhausted && current[currentSearch] === base[baseIndex]) {
	            added = added.concat(current.slice(currentIndex, currentSearch));
	            currentIndex = currentSearch + 1;
	            baseIndex++;
	            isSearching = false;
	        }
	        else if (!baseExhausted && base[baseSearch] === current[currentIndex]) {
	            removed = removed.concat(base.slice(baseIndex, baseSearch));
	            baseIndex = baseSearch + 1;
	            currentIndex++;
	            isSearching = false;
	        }
	    }
	    return [
	        added.concat(current.slice(currentIndex)),
	        removed.concat(base.slice(baseIndex))
	    ];
	}
	var _a;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 171:
/*!**********************************************************************!*\
  !*** ./wwwroot/libs/tsxbuild/Shared/Components/SelectPaymentTerm.js ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(/*! react */ 1);
	var mobx_react_1 = __webpack_require__(/*! mobx-react */ 168);
	var SelectPaymentTerm = (function (_super) {
	    __extends(SelectPaymentTerm, _super);
	    function SelectPaymentTerm() {
	        _super.apply(this, arguments);
	    }
	    SelectPaymentTerm.prototype.onChangePaymentTerm = function (e) {
	        this.props.store.changedPaymentTerm(e.target.value);
	    };
	    SelectPaymentTerm.prototype.render = function () {
	        var options = [];
	        this.props.store.commonStore.paymentTerms.map(function (term) {
	            return (options.push(React.createElement("option", {key: term.id, value: term.id}, " ", term.description, " ")));
	        });
	        return (React.createElement("select", {id: "optPaymentTerm", onChange: this.onChangePaymentTerm.bind(this)}, options));
	    };
	    SelectPaymentTerm = __decorate([
	        mobx_react_1.observer
	    ], SelectPaymentTerm);
	    return SelectPaymentTerm;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = SelectPaymentTerm;
	//# sourceMappingURL=SelectPaymentTerm.js.map

/***/ },

/***/ 172:
/*!*******************************************************************!*\
  !*** ./wwwroot/libs/tsxbuild/Shared/Components/SelectLineItem.js ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(/*! react */ 1);
	var mobx_react_1 = __webpack_require__(/*! mobx-react */ 168);
	var SelectLineItem = (function (_super) {
	    __extends(SelectLineItem, _super);
	    function SelectLineItem() {
	        _super.apply(this, arguments);
	    }
	    SelectLineItem.prototype.onChangeItem = function (e) {
	        this.props.store.updateLineItem(this.props.row, "itemId", e.target.value);
	    };
	    SelectLineItem.prototype.render = function () {
	        var options = [];
	        this.props.store.commonStore.items.map(function (item) {
	            return (options.push(React.createElement("option", {key: item.id, value: item.id}, " ", item.description, " ")));
	        });
	        return (React.createElement("select", {defaultValue: this.props.selected, id: this.props.controlId, onChange: this.onChangeItem.bind(this)}, options));
	    };
	    SelectLineItem = __decorate([
	        mobx_react_1.observer
	    ], SelectLineItem);
	    return SelectLineItem;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = SelectLineItem;
	//# sourceMappingURL=SelectLineItem.js.map

/***/ },

/***/ 173:
/*!**************************************************************************!*\
  !*** ./wwwroot/libs/tsxbuild/Shared/Components/SelectLineMeasurement.js ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(/*! react */ 1);
	var mobx_react_1 = __webpack_require__(/*! mobx-react */ 168);
	var SelectLineMeasurement = (function (_super) {
	    __extends(SelectLineMeasurement, _super);
	    function SelectLineMeasurement() {
	        _super.apply(this, arguments);
	    }
	    SelectLineMeasurement.prototype.onChangeMeasurement = function (e) {
	        this.props.store.updateLineItem(this.props.row, "measurementId", e.target.value);
	    };
	    SelectLineMeasurement.prototype.render = function () {
	        var options = [];
	        this.props.store.commonStore.measurements.map(function (measurement) {
	            return (options.push(React.createElement("option", {key: measurement.id, value: measurement.id}, " ", measurement.description, " ")));
	        });
	        return (React.createElement("select", {defaultValue: this.props.selected, id: this.props.controlId, onChange: this.onChangeMeasurement.bind(this)}, options));
	    };
	    SelectLineMeasurement = __decorate([
	        mobx_react_1.observer
	    ], SelectLineMeasurement);
	    return SelectLineMeasurement;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = SelectLineMeasurement;
	//# sourceMappingURL=SelectLineMeasurement.js.map

/***/ },

/***/ 180:
/*!*******************************************************************!*\
  !*** ./wwwroot/libs/tsxbuild/Shared/Components/SelectCustomer.js ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(/*! react */ 1);
	var mobx_react_1 = __webpack_require__(/*! mobx-react */ 168);
	var SelectCustomer = (function (_super) {
	    __extends(SelectCustomer, _super);
	    function SelectCustomer() {
	        _super.apply(this, arguments);
	    }
	    SelectCustomer.prototype.onChangeCustomer = function (e) {
	        this.props.store.changedCustomer(e.target.value);
	    };
	    SelectCustomer.prototype.render = function () {
	        var options = [];
	        this.props.store.commonStore.customers.map(function (customer) {
	            return (options.push(React.createElement("option", {key: customer.id, value: customer.id}, " ", customer.name, " ")));
	        });
	        return (React.createElement("select", {id: "optCustomer", onChange: this.onChangeCustomer.bind(this)}, options));
	    };
	    SelectCustomer = __decorate([
	        mobx_react_1.observer
	    ], SelectCustomer);
	    return SelectCustomer;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = SelectCustomer;
	//# sourceMappingURL=SelectCustomer.js.map

/***/ },

/***/ 205:
/*!************************************************************************!*\
  !*** ./wwwroot/libs/tsxbuild/Shared/Stores/Sales/SalesInvoiceStore.js ***!
  \************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var mobx_1 = __webpack_require__(/*! mobx */ 169);
	var SalesInvoice_1 = __webpack_require__(/*! ./SalesInvoice */ 206);
	var SalesInvoiceLine_1 = __webpack_require__(/*! ./SalesInvoiceLine */ 207);
	var SalesStore = (function () {
	    function SalesStore() {
	        this.salesInvoice = new SalesInvoice_1.default();
	        mobx_1.extendObservable(this.salesInvoice, {
	            customerId: this.salesInvoice.customerId,
	            invoiceDate: this.salesInvoice.invoiceDate,
	            paymentTermId: this.salesInvoice.paymentTermId,
	            referenceNo: this.salesInvoice.referenceNo,
	            salesInvoiceLines: []
	        });
	    }
	    SalesStore.prototype.changedCustomer = function (custId) {
	        this.salesInvoice.customerId = custId;
	    };
	    SalesStore.prototype.changedInvoiceDate = function (date) {
	        this.salesInvoice.invoiceDate = date;
	    };
	    SalesStore.prototype.addLineItem = function (itemId, measurementId, quantity, amount, discount) {
	        var newLineItem = new SalesInvoiceLine_1.default(itemId, measurementId, quantity, amount, discount);
	        this.salesInvoice.salesInvoiceLines.push(mobx_1.extendObservable(newLineItem, newLineItem));
	    };
	    SalesStore.prototype.removeLineItem = function (row) {
	        this.salesInvoice.salesInvoiceLines.splice(row, 1);
	    };
	    SalesStore.prototype.updateLineItem = function (row, targetProperty, value) {
	        if (this.salesInvoice.salesInvoiceLines.length > 0)
	            this.salesInvoice.salesInvoiceLines[row][targetProperty] = value;
	    };
	    SalesStore.prototype.grandTotal = function () {
	        var sum = 0;
	        for (var i = 0; i < this.salesInvoice.salesInvoiceLines.length; i++) {
	            var lineSum = this.salesInvoice.salesInvoiceLines[i].quantity * this.salesInvoice.salesInvoiceLines[i].amount;
	            sum = sum + lineSum;
	        }
	        return sum;
	    };
	    SalesStore.prototype.lineTotal = function (row) {
	        var lineSum = this.salesInvoice.salesInvoiceLines[row].quantity * this.salesInvoice.salesInvoiceLines[row].amount;
	        ;
	        return lineSum;
	    };
	    return SalesStore;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = SalesStore;
	//# sourceMappingURL=SalesInvoiceStore.js.map

/***/ },

/***/ 206:
/*!*******************************************************************!*\
  !*** ./wwwroot/libs/tsxbuild/Shared/Stores/Sales/SalesInvoice.js ***!
  \*******************************************************************/
/***/ function(module, exports) {

	"use strict";
	var SalesInvoice = (function () {
	    function SalesInvoice() {
	        this.salesInvoiceLines = [];
	    }
	    return SalesInvoice;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = SalesInvoice;
	//# sourceMappingURL=SalesInvoice.js.map

/***/ },

/***/ 207:
/*!***********************************************************************!*\
  !*** ./wwwroot/libs/tsxbuild/Shared/Stores/Sales/SalesInvoiceLine.js ***!
  \***********************************************************************/
/***/ function(module, exports) {

	"use strict";
	var SalesInvoiceLine = (function () {
	    function SalesInvoiceLine(itemId, measurementId, quantity, amount, discount) {
	        this.itemId = itemId;
	        this.measurementId = measurementId;
	        this.quantity = quantity;
	        this.amount = amount;
	        this.discount = discount;
	    }
	    return SalesInvoiceLine;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = SalesInvoiceLine;
	//# sourceMappingURL=SalesInvoiceLine.js.map

/***/ }

});
//# sourceMappingURL=addsalesinvoice.chunk.js.map