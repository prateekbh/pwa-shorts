import { h, Component } from 'preact';
import Observer from '@researchgate/react-intersection-observer';

export default class ViewableMonitor extends Component {
	state = {
		isIntersecting: false
	}

	handleChange = ({ isIntersecting }) => {
		this.setState({ isIntersecting });
	};

	render() {
		const isIntersectionObserverPresent = 'IntersectionObserver' in window;
		const { children, ...rest } = this.props;
		let element = children[0](isIntersectionObserverPresent? this.state.isIntersecting: true);

		if (isIntersectionObserverPresent) {
			return (
				<Observer {...rest} onChange={this.handleChange}>
					{element}
				</Observer>
			);
		}
		return (
			<div>
				{element}
			</div>
		);
	}
}