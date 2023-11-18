import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './Layout/App';
import DefaultTheme from './DefaultTheme';
import ErrorPage from './Layout/ErrorPage';
import About from './Layout/MainViews/About';
import Resume from './Layout/MainViews/Resume';
import Works from './Layout/MainViews/Works';
import Blog from './Layout/MainViews/Blog';
import Resources from './Layout/MainViews/Resources';
import Contact from './Layout/MainViews/Contact';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "About",
				element: <About />
			},
			{
				path: "Resume",
				element: <Resume />
			},
			{
				path: "Works",
				element: <Works />
			},
			{
				path: "Blog",
				element: <Blog />
			},
			{
				path: "Resources",
				element: <Resources />
			},
			{
				path: "Contact",
				element: <Contact />
			}
		]
	}
])

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<MantineProvider theme={DefaultTheme} defaultColorScheme='dark' >
			<RouterProvider router={router} />
		</MantineProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
