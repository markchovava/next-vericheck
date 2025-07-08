import React from "react";
import {
  Shield,
  Users,
  FileText,
  MapPin,
  CheckCircle,
  ArrowRight,
  Target,
  Eye,
  Heart,
  Award,
  Globe,
  Lock,
  Zap,
  TrendingUp,
  Building,
  GraduationCap,
  CreditCard,
  Car,
} from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-light text-white mb-6 leading-tight">
              secure, reliable,
              <span className="text-primary block font-extralight">
                verified
              </span>
            </h1>
            <p className="text-2xl text-gray-300 font-light leading-relaxed">
              Your Trusted Partner in Identity and Document Verification &
              Screening
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-white mb-8">
                About VeriCheck
              </h2>
              <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed">
                <p>
                  VeriCheck (Private) Limited is a multi-faceted fintech
                  business headquartered in Zimbabwe at the forefront of
                  delivering reliable, efficient, and secure identity and
                  document verification and screening services to private
                  individuals, small, medium and large corporates and government
                  institutions across Africa.
                </p>
                <p>
                  We empower businesses to mitigate risks, streamline
                  operations, and stay compliant in an increasingly digital
                  world. The business is led by a dynamic and experienced team
                  with combined expertise in financial services, digital
                  transformation, geographical Information Systems (GIS),
                  Architecture Design, Application, Design, Data Management
                  Services and Support across various technologies.
                </p>
                <p>
                  {
                    "VeriCheck is Zimbabwe's leading and only comprehensive end to end document verification and screening service providing end to end solutions to address our customers' needs."
                  }
                </p>
              </div>
            </div>
            <div className="bg-gray-800 p-12 border border-gray-700">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-2">
                      Our Mission
                    </h3>
                    <p className="text-gray-300 font-light">
                      To simplify the process of identity and document
                      verification and screening services while upholding the
                      highest standards of security, privacy and accuracy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-2">
                      Our Vision
                    </h3>
                    <p className="text-gray-300 font-light">
                      Building Trust Through Secure and Seamless Verification &
                      Screening Solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-light text-white mb-12 text-center">
            Core Values
          </h2>
          <div className="grid grid-cols-5 gap-8">
            <div className="bg-gray-900 p-8 border border-gray-600 text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-light text-white mb-3">Accuracy</h3>
              <p className="text-gray-300 font-light text-sm">
                Providing precise, error-free verifications
              </p>
            </div>
            <div className="bg-gray-900 p-8 border border-gray-600 text-center">
              <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-light text-white mb-3">Innovation</h3>
              <p className="text-gray-300 font-light text-sm">
                Leveraging advanced technology for cutting-edge solutions
              </p>
            </div>
            <div className="bg-gray-900 p-8 border border-gray-600 text-center">
              <Heart className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-light text-white mb-3">Trust</h3>
              <p className="text-gray-300 font-light text-sm">
                Building lasting relationships with businesses and customers
              </p>
            </div>
            <div className="bg-gray-900 p-8 border border-gray-600 text-center">
              <Lock className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-light text-white mb-3">
                Confidentiality
              </h3>
              <p className="text-gray-300 font-light text-sm">
                Maintaining utmost confidentiality to our customers
              </p>
            </div>
            <div className="bg-gray-900 p-8 border border-gray-600 text-center">
              <Award className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-light text-white mb-3">
                Professionalism
              </h3>
              <p className="text-gray-300 font-light text-sm">
                Highest standards of professionalism on all mandates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges We Solve */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-light text-white mb-12 text-center">
            The Challenges We Solve
          </h2>
          <div className="grid grid-cols-4 gap-8">
            <div className="bg-primary p-8 text-white">
              <Shield className="w-16 h-16 mb-6" />
              <h3 className="text-2xl font-light mb-4">Fraud Prevention</h3>
              <p className="font-light text-purple-100">
                Detect counterfeit documents and verify identities to prevent
                financial and reputational damage.
              </p>
            </div>
            <div className="bg-blue-600 p-8 text-white">
              <CheckCircle className="w-16 h-16 mb-6" />
              <h3 className="text-2xl font-light mb-4">
                Regulatory Compliance
              </h3>
              <p className="font-light text-blue-100">
                Ensure adherence to industry standards like AML and KYC.
              </p>
            </div>
            <div className="bg-green-600 p-8 text-white">
              <TrendingUp className="w-16 h-16 mb-6" />
              <h3 className="text-2xl font-light mb-4">
                Onboarding Efficiency
              </h3>
              <p className="font-light text-green-100">
                Simplify the customer onboarding process with automated,
                real-time checks.
              </p>
            </div>
            <div className="bg-orange-600 p-8 text-white">
              <Globe className="w-16 h-16 mb-6" />
              <h3 className="text-2xl font-light mb-4">Global Reach</h3>
              <p className="font-light text-orange-100">
                {
                  "Address cross-border verification challenges in today's connected world."
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-light text-white mb-16 text-center">
            Our Services
          </h2>

          {/* Document Verification Services */}
          <div className="mb-16">
            <h3 className="text-3xl font-light text-white mb-8">
              Document Verification Services
            </h3>
            <div className="grid grid-cols-3 gap-8">
              <div className="bg-gray-900 p-6 border border-gray-600">
                <FileText className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-xl font-light text-white mb-3">
                  Identity Verification
                </h4>
                <ul className="space-y-2 text-gray-300 font-light text-sm">
                  <li>• Real-time validation of government-issued IDs</li>
                  <li>• Facial recognition technology</li>
                  <li>• AI-powered fraud detection</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-6 border border-gray-600">
                <MapPin className="w-12 h-12 text-blue-400 mb-4" />
                <h4 className="text-xl font-light text-white mb-3">
                  Address Verification
                </h4>
                <ul className="space-y-2 text-gray-300 font-light text-sm">
                  <li>• Physical address verification</li>
                  <li>• Property ownership validation</li>
                  <li>• Immovable properties & vehicles</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-6 border border-gray-600">
                <Shield className="w-12 h-12 text-green-400 mb-4" />
                <h4 className="text-xl font-light text-white mb-3">
                  License Verification
                </h4>
                <ul className="space-y-2 text-gray-300 font-light text-sm">
                  <li>• Professional license validation</li>
                  <li>• Employee history checks</li>
                  <li>• Certificate authentication</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-6 border border-gray-600">
                <CheckCircle className="w-12 h-12 text-orange-400 mb-4" />
                <h4 className="text-xl font-light text-white mb-3">
                  Product Authentication
                </h4>
                <ul className="space-y-2 text-gray-300 font-light text-sm">
                  <li>• QR code verification</li>
                  <li>• Concert ticket validation</li>
                  <li>• Consumer product authentication</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-6 border border-gray-600">
                <Users className="w-12 h-12 text-red-400 mb-4" />
                <h4 className="text-xl font-light text-white mb-3">
                  Compliance & Risk
                </h4>
                <ul className="space-y-2 text-gray-300 font-light text-sm">
                  <li>• AML and KYC solutions</li>
                  <li>• Independent KYC audits</li>
                  <li>• Regulatory compliance</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-6 border border-gray-600">
                <Zap className="w-12 h-12 text-teal-400 mb-4" />
                <h4 className="text-xl font-light text-white mb-3">
                  API Integration
                </h4>
                <ul className="space-y-2 text-gray-300 font-light text-sm">
                  <li>• Seamless platform integration</li>
                  <li>• Fully customizable solutions</li>
                  <li>• Scalable verification volumes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Screening Services */}
          <div>
            <h3 className="text-3xl font-light text-white mb-8">
              Screening Services
            </h3>
            <div className="grid grid-cols-4 gap-8">
              <div className="bg-primary p-6 text-white">
                <Users className="w-12 h-12 mb-4" />
                <h4 className="text-xl font-light mb-3">PEP Screening</h4>
                <p className="font-light text-purple-100 text-sm">
                  Identify Politically Exposed Persons with real-time updates
                  and global coverage.
                </p>
              </div>
              <div className="bg-blue-600 p-6 text-white">
                <CreditCard className="w-12 h-12 mb-4" />
                <h4 className="text-xl font-light mb-3">Credit Checks</h4>
                <p className="font-light text-blue-100 text-sm">
                  Evaluate financial stability and risk profiles with
                  comprehensive credit history.
                </p>
              </div>
              <div className="bg-red-600 p-6 text-white">
                <Shield className="w-12 h-12 mb-4" />
                <h4 className="text-xl font-light mb-3">Criminal Records</h4>
                <p className="font-light text-red-100 text-sm">
                  Verify past criminal records with national and international
                  database coverage.
                </p>
              </div>
              <div className="bg-orange-600 p-6 text-white">
                <FileText className="w-12 h-12 mb-4" />
                <h4 className="text-xl font-light mb-3">Civil Judgements</h4>
                <p className="font-light text-orange-100 text-sm">
                  Verify civil judgements and notifications of pending court
                  cases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-light text-white mb-12 text-center">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-4 gap-8">
            <div className="bg-gray-800 p-8 border border-gray-600 text-center">
              <Building className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-light text-white mb-4">
                Banking & Finance
              </h3>
              <ul className="space-y-2 text-gray-300 font-light text-sm text-left">
                <li>• Secure customer onboarding</li>
                <li>• Fraud prevention in payments</li>
                <li>• KYC compliance</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 border border-gray-600 text-center">
              <Globe className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-xl font-light text-white mb-4">
                E-commerce & Retail
              </h3>
              <ul className="space-y-2 text-gray-300 font-light text-sm text-left">
                <li>• Verify buyer and seller identities</li>
                <li>• Prevent fraudulent transactions</li>
                <li>• Reduce chargebacks</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 border border-gray-600 text-center">
              <GraduationCap className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-xl font-light text-white mb-4">Education</h3>
              <ul className="space-y-2 text-gray-300 font-light text-sm text-left">
                <li>• Verify student credentials</li>
                <li>• Prevent certification fraud</li>
                <li>• Secure admissions process</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 border border-gray-600 text-center">
              <Car className="w-16 h-16 text-orange-400 mx-auto mb-6" />
              <h3 className="text-xl font-light text-white mb-4">
                Government & Police
              </h3>
              <ul className="space-y-2 text-gray-300 font-light text-sm text-left">
                <li>• Automatic Number Plate Recognition</li>
                <li>• License verification</li>
                <li>• Identity validation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-light text-white mb-12 text-center">
            Why Choose VeriCheck?
          </h2>
          <div className="grid grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">Accuracy</h3>
              <p className="text-gray-300 font-light text-sm">
                Verified and up-to-date data from trusted sources
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">Speed</h3>
              <p className="text-gray-300 font-light text-sm">
                Get results in record time with our streamlined process
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">Compliance</h3>
              <p className="text-gray-300 font-light text-sm">
                Stay aligned with industry regulations and legal requirements
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">Support</h3>
              <p className="text-gray-300 font-light text-sm">
                Dedicated team available to address your queries
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">
                Global Reach
              </h3>
              <p className="text-gray-300 font-light text-sm">
                Comprehensive coverage across multiple countries and regions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Partner with us for a safer, smarter future
          </h2>
          <p className="text-xl text-purple-100 font-light mb-8 max-w-3xl mx-auto">
            Secure your business with trusted verification solutions. Get
            started today with our comprehensive suite of verification and
            screening services.
          </p>
          <div className="flex flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 hover:bg-gray-100 transition-colors font-light text-lg">
              Start Free Trial
            </button>
            <button className="border border-white text-white px-8 py-4 hover:bg-white hover:text-primary transition-colors font-light text-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-light text-white mb-12 text-center">
            Get in Touch
          </h2>
          <div className="grid grid-cols-4 gap-8">
            <div className="bg-gray-800 p-8 border border-gray-600 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">Address</h3>
              <p className="text-gray-300 font-light text-sm">
                2nd Floor, Redbridge South,
                <br />
                Eastgate Building,
                <br />
                Harare, Zimbabwe
              </p>
            </div>
            <div className="bg-gray-800 p-8 border border-gray-600 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">Phone</h3>
              <p className="text-gray-300 font-light">+263 772832746</p>
            </div>
            <div className="bg-gray-800 p-8 border border-gray-600 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">Email</h3>
              <p className="text-gray-300 font-light">info@vericheck.co.zw</p>
            </div>
            <div className="bg-gray-800 p-8 border border-gray-600 text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">Website</h3>
              <p className="text-gray-300 font-light">www.vericheck.co.zw</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
