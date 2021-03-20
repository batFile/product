import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LayoutBase, LayoutBlock } from '../../layouts';

// import { routes } from '../tree';

import { Main, Test } from './../../pages';

const View = React.memo(() => {
	return (
		<Switch>
		 	{/* {Object.keys(routes).map((key) => { */}
		{/* // 		const { page: Page, ...route } = routes[key]; */}

				{/* // return ( */}

				<Route exact path='/'><LayoutBase><Main/></LayoutBase></Route>
				<Route path='/test'><LayoutBase><Test/></LayoutBase></Route>

					{/* <Route path={ '/' } >
						<LayoutBase>
							<Main/>
						</LayoutBase>
					</Route>
					<Route path={ '/test' }>
						<LayoutBase>
							<Test/>
						</LayoutBase>
					</Route> */}


			{/* // 	) */}
			{/* // })} */}
		</Switch>
	);
});

export { View };