
const initialState={
    title:'',
    author:'',
	dateAdded:'',
    viewCount: 0
};

export const actionTypes = {
    UPDATING_TITLE:'UPDATING_TITLE',
    UPDATING_AUTHOR:'UPDATING_AUTHOR',
    UPDATING_DATE_ADDED:'UPDATING_DATE_ADDED',
    UPDATING_VIEW_COUNT:'UPDATING_VIEW_COUNT',
	ADD_POST:'ADD_POST'
};

export const actions = {
    update_title:function (title) {
        return{
            type:actionTypes.UPDATING_TITLE,
            title
        }
    },
    update_author:function (author) {
        return{
            type:actionTypes.UPDATING_AUTHOR,
            author
        }
    },
	update_date_added:function (dateAdded) {
        return{
            type:actionTypes.UPDATING_DATE_ADDED,
            dateAdded
        }
    },
	update_view_count:function (viewCount) {
        return{
            type:actionTypes.UPDATING_VIEW_COUNT,
            viewCount
        }
    },
	add_post:function (data) {
        return{
            type:actionTypes.ADD_POST,
            data
        }
    }
};

export function reducer(state = initialState, action) {
    switch (action.type){
        case actionTypes.UPDATING_TITLE:
            return{
                ...state,title:action.title
            };
        case actionTypes.UPDATING_AUTHOR:
            return{
                ...state,author:action.author
            };
		case actionTypes.UPDATING_DATE_ADDED:
            return{
                ...state,dateAdded:action.dateAdded
            };
		case actionTypes.UPDATING_VIEW_COUNT:
            return{
                ...state,viewCount:action.viewCount
            };	
		
        default:
            return state;
    }
}