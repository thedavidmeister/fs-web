(ns hoplon.app-pages._index_DOT_html (:require scrollto.lib hoplon.jquery [javelin.core :refer [->Cell input? cell cell? destroy-cell! lift lens? set-formula! constant? cell-doseq* deref* set-cell! lens formula? alts! dosync* cell-map formula]] [hoplon.jquery :refer [set-attributes! check-val! set-styles! text-val!]] [hoplon.core :refer [form audio input menuitem hgroup do! timeout $text base h1 set-attributes! embed shadow h3 body keygen progress main cite on-page-load i p nav ruby a menu blockquote img $comment span track data u dl select html thead del fieldset aside figure figcaption q on! bdi append-child! video address caption dd rp hr tbody table html-var add-initfn! pre ul replace-child! html-time html-map sup dfn sub mark script button wbr insert-before! strong normalize-class li dt rtc td tr section th optgroup bust-cache iframe remove-child! legend em kbd spliced html-object article abbr template multicol prerendering? <!-- source output set-styles! route-cell header datalist tfoot s ins footer title h5 canvas param div option summary samp small style textarea loop-tpl* h4 head ol details col label picture rt when-dom h6 link page-load colgroup meter html-meta static-elements bdo --> b attribute? code dialog noframes do-watch noscript safe-nth h2 area br]]) (:require-macros [javelin.core :refer [with-let mx2 dosync cell= set-cell!= prop-cell cell-doseq formulet defc defc= macroexpand-all mx formula-of cell-let]] [hoplon.core :refer [definterval text elem+ cache-key with-timeout defelem+ when-tpl static sexp defelem elem def-values if-tpl cond-tpl with-page-load for-tpl with-dom case-tpl loop-tpl with-interval with-init!]]))



(html
  (body
   :css {:width "5000px" :background-color "black"}
   (let [xs (range 100)
         ys (shuffle xs)
         i (cell 0)]
    (for-tpl [x xs]
     (with-let [el (img x
                    :src "/gif.gif"
                    :click #(reset! i (get ys @x 0))
                    :css (cell= {:width "664px"
                                 :height "473px"
                                 :display "block"
                                 :float "left"
                                 :outline "none"
                                 :cursor "pointer"}))]
      (do-watch (cell= (= i x))
       (fn [_ n]
        (when n (.scrollTo js/jQuery el (clj->js {:duration 1000}))))))))))
